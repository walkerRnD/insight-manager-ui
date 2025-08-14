import { Surreal } from 'surrealdb';
import { surrealdbNodeEngines } from '@surrealdb/node';
import {
  SURREAL_CONNECTION,
  SURREAL_NAMESPACE,
  SURREAL_DATABASE,
  SURREAL_ACCESS,
  SURREAL_ROOT_USER,
  SURREAL_ROOT_PASS
} from '$env/static/private';

/**
 * Create a SurrealDB client configured for server-only usage.
 * - Uses @surrealdb/node engines so local mem:// and surrealkv:// work
 * - Connects to the URL in SURREAL_CONNECTION and selects NS/DB
 * - If an auth token is provided, authenticates the session
 */
export async function createDb(authToken?: string) {
  const db = new Surreal({ engines: surrealdbNodeEngines() });
  await db.connect(SURREAL_CONNECTION);
  await db.use({ namespace: SURREAL_NAMESPACE, database: SURREAL_DATABASE });
  if (authToken) {
    await db.authenticate(authToken);
  }
  return db;
}

/**
 * Seed local schemas/access if using embedded engines.
 * Idempotent via IF NOT EXISTS clauses.
 */
export async function seedIfNeeded() {
  const isLocal = SURREAL_CONNECTION.startsWith('mem://') || SURREAL_CONNECTION.startsWith('surrealkv://');
  if (!isLocal) return; // don't mutate remote DBs from the app

  const db = new Surreal({ engines: surrealdbNodeEngines() });
  await db.connect(SURREAL_CONNECTION);
  await db.use({ namespace: SURREAL_NAMESPACE, database: SURREAL_DATABASE });

  // Elevate to root/namespace user if provided (optional for embedded engines)
  if (SURREAL_ROOT_USER) {
    try {
      await db.signin({ username: SURREAL_ROOT_USER, password: SURREAL_ROOT_PASS ?? '' });
    } catch {
      // continue without elevation if credentials invalid/not set
    }
  }

  const access = SURREAL_ACCESS;

  const surql = `
    DEFINE ACCESS IF NOT EXISTS ${access} ON DATABASE TYPE RECORD
      SIGNUP (
        CREATE user SET
          email = string::lowercase($email),
          pass = crypto::argon2::generate($pass),
          created_at = time::now()
      )
      SIGNIN (
        SELECT * FROM user WHERE email = string::lowercase($email) AND crypto::argon2::compare(pass, $pass)
      )
      DURATION FOR TOKEN 15m, FOR SESSION 12h;

    DEFINE TABLE IF NOT EXISTS user SCHEMALESS
      PERMISSIONS
        FOR select, update, delete WHERE id = $auth.id
        FOR create WHERE true;

    DEFINE INDEX IF NOT EXISTS user_email_unique ON TABLE user COLUMNS email UNIQUE;
  `;

  try {
    await db.query(surql);
  } catch (e) {
    // swallow errors to avoid crashing dev server on re-seed
  }
}
