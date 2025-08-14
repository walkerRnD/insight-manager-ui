<script lang="ts">
  import '../app.css';
  import favicon from '$lib/assets/favicon.svg';
  import { Button } from '$lib/components/ui/button/index.js';
  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

<div class="min-h-dvh bg-background text-foreground flex flex-col">
  <header class="sticky top-0 z-50 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
    <nav class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between" aria-label="Global">
      <a href="/" class="flex items-center gap-2 font-semibold">
        <img src={favicon} alt="Insight Manager" class="size-6" />
        <span>Insight Manager</span>
      </a>
      <div class="hidden md:flex items-center gap-6 text-sm">
        <a href="#features" class="text-muted-foreground hover:text-foreground">Features</a>
        <a href="#how-it-works" class="text-muted-foreground hover:text-foreground">How it works</a>
        <a href="#integrations" class="text-muted-foreground hover:text-foreground">Integrations</a>
        <a href="/demo" class="text-muted-foreground hover:text-foreground">Demo</a>
      </div>
      <div class="flex items-center gap-2">
        <Button variant="ghost" size="sm" href="/auth" aria-label="Sign in">Sign in</Button>
        <Button size="sm" href="#cta" aria-label="Get started">Get started</Button>
      </div>
    </nav>
  </header>

  <main class="flex-1">
    {@render children?.()}
  </main>

  <footer class="border-t">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 text-sm text-muted-foreground">
      <div class="flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} Insight Manager. All rights reserved.</p>
        <div class="flex items-center gap-4">
          <a href="#" class="hover:text-foreground">Privacy</a>
          <a href="#" class="hover:text-foreground">Terms</a>
        </div>
      </div>
    </div>
  </footer>
</div>
