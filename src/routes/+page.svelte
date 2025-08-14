<script lang="ts">
  import { Button } from '$lib/components/ui/button/index.js';
  import { Inbox, Bot, BarChart3, Map, Calendar, Presentation, ArrowRight, CheckCircle2, Shield } from '@lucide/svelte';
</script>

<!-- Hero -->
<section class="relative overflow-hidden">
  <img alt="Team collaborating in a modern office" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop" class="absolute inset-0 -z-10 h-full w-full object-cover opacity-15" />
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-28">
    <div class="max-w-3xl">
      <h1 class="text-4xl sm:text-6xl font-bold tracking-tight animate-fadeIn">AI-powered product management that turns feedback into a living story map</h1>
      <p class="mt-6 text-lg text-muted-foreground max-w-2xl">Unify feature requests, bug reports, and internal ideas. Deduplicate, cluster, prioritize, and generate exec-ready roadmaps with evidence and governance.</p>
      <div class="mt-8 flex flex-wrap gap-3">
        <Button size="lg" href="#cta">Get started</Button>
        <Button size="lg" variant="outline" href="/demo">View demo</Button>
      </div>
      <div class="mt-10 text-sm text-muted-foreground">Trusted concepts & integrations: Jira, Linear, GitHub, Slack, Intercom, Notion</div>
    </div>
  </div>
</section>

<!-- Features Grid -->
<section id="features" class="py-20">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="max-w-2xl">
      <h2 class="text-3xl font-semibold tracking-tight">Everything in one place</h2>
      <p class="mt-2 text-muted-foreground">From intake to presentation, Insight Manager connects the dots with human-in-the-loop control.</p>
    </div>
    <div class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <div class="rounded-xl border bg-card text-card-foreground p-6">
        <div class="size-10 rounded-md bg-primary/10 text-primary grid place-items-center"><Inbox class="size-5" /></div>
        <h3 class="mt-4 font-medium">Unified Intake Hub</h3>
        <p class="mt-2 text-sm text-muted-foreground">Collect features, bugs, and ideas in one place (CSV, Slack, Jira/Linear, Intercom).</p>
      </div>
      <div class="rounded-xl border bg-card text-card-foreground p-6">
        <div class="size-10 rounded-md bg-primary/10 text-primary grid place-items-center"><Bot class="size-5" /></div>
        <h3 class="mt-4 font-medium">AI triage & insights</h3>
        <p class="mt-2 text-sm text-muted-foreground">Semantic clustering, dedupe, sentiment, and impact scoring with explainability.</p>
      </div>
      <div class="rounded-xl border bg-card text-card-foreground p-6">
        <div class="size-10 rounded-md bg-primary/10 text-primary grid place-items-center"><BarChart3 class="size-5" /></div>
        <h3 class="mt-4 font-medium">Prioritization</h3>
        <p class="mt-2 text-sm text-muted-foreground">RICE/ICE/MoSCoW with what‑if scenarios and editable scoring.</p>
      </div>
      <div class="rounded-xl border bg-card text-card-foreground p-6">
        <div class="size-10 rounded-md bg-primary/10 text-primary grid place-items-center"><Map class="size-5" /></div>
        <h3 class="mt-4 font-medium">User Story Mapping</h3>
        <p class="mt-2 text-sm text-muted-foreground">Auto-generate story maps from clusters → epics → slices with AI assist.</p>
      </div>
      <div class="rounded-xl border bg-card text-card-foreground p-6">
        <div class="size-10 rounded-md bg-primary/10 text-primary grid place-items-center"><Calendar class="size-5" /></div>
        <h3 class="mt-4 font-medium">Roadmap views</h3>
        <p class="mt-2 text-sm text-muted-foreground">Now/Next/Later, quarterly, and theme-based views aligned with capacity.</p>
      </div>
      <div class="rounded-xl border bg-card text-card-foreground p-6">
        <div class="size-10 rounded-md bg-primary/10 text-primary grid place-items-center"><Presentation class="size-5" /></div>
        <h3 class="mt-4 font-medium">Presentations</h3>
        <p class="mt-2 text-sm text-muted-foreground">One‑click briefs, slides, release notes, and shareable web views.</p>
      </div>
    </div>
  </div>
</section>

<!-- Problem / Solution -->
<section class="py-20 bg-muted/40">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-10 lg:grid-cols-2 items-center">
    <div>
      <h2 class="text-3xl font-semibold tracking-tight">What it solves</h2>
      <ul class="mt-6 space-y-3">
        <li class="flex items-start gap-3"><CheckCircle2 class="mt-1 size-5 text-primary" /><span>Breaks down silos by unifying feedback, bugs, and ideas.</span></li>
        <li class="flex items-start gap-3"><CheckCircle2 class="mt-1 size-5 text-primary" /><span>Clusters duplicates and links roadmap items to evidence.</span></li>
        <li class="flex items-start gap-3"><CheckCircle2 class="mt-1 size-5 text-primary" /><span>Explainable AI suggestions with human approvals and audit.</span></li>
      </ul>
      <div class="mt-8 flex gap-3"><Button href="#cta">Start free</Button><Button variant="outline" href="/demo">See it in action</Button></div>
    </div>
    <div class="relative rounded-xl overflow-hidden border bg-card text-card-foreground min-h-72">
      <img alt="Abstract graph visualization" src="https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&w=1200&auto=format&fit=crop" class="h-full w-full object-cover" />
    </div>
  </div>
</section>

<!-- How it works -->
<section id="how-it-works" class="py-20">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <h2 class="text-3xl font-semibold tracking-tight">How it works</h2>
    <div class="mt-10 grid gap-6 lg:grid-cols-3">
      <div class="rounded-xl border p-6 bg-card">
        <div class="text-sm font-semibold text-primary">1 • Ingest</div>
        <p class="mt-2 text-sm text-muted-foreground">Connect Slack, Jira/Linear, Intercom, CSV, and more.</p>
      </div>
      <div class="rounded-xl border p-6 bg-card">
        <div class="text-sm font-semibold text-primary">2 • Triage</div>
        <p class="mt-2 text-sm text-muted-foreground">AI clusters, dedupes, and surfaces themes with confidence.</p>
      </div>
      <div class="rounded-xl border p-6 bg-card">
        <div class="text-sm font-semibold text-primary">3 • Plan & Present</div>
        <p class="mt-2 text-sm text-muted-foreground">Generate story maps, prioritize with RICE, and export slides.</p>
      </div>
    </div>
    <div class="mt-8 overflow-hidden rounded-xl border">
      <img alt="Team planning on a whiteboard" src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop" class="w-full object-cover" />
    </div>
  </div>
</section>

<!-- Integrations -->
<section id="integrations" class="py-20 bg-muted/40">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <h2 class="text-3xl font-semibold tracking-tight">Works with your stack</h2>
    <div class="mt-6 flex flex-wrap items-center gap-3 text-sm">
      {#each ['Jira','Linear','GitHub','Slack','Intercom','Notion','Mixpanel','GA','LaunchDarkly'] as name}
        <span class="rounded-md border bg-background px-3 py-1.5 text-muted-foreground">{name}</span>
      {/each}
    </div>
  </div>
</section>

<!-- CTA -->
<section id="cta" class="py-20">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="rounded-2xl border bg-gradient-to-br from-primary/10 to-accent/20 p-10 sm:p-14">
      <div class="max-w-2xl">
        <h3 class="text-2xl font-semibold">Turn signals into decisions in days, not weeks.</h3>
        <p class="mt-2 text-muted-foreground">Start with a unified intake and let AI do the heavy lifting — you stay in control.</p>
        <div class="mt-6 flex gap-3">
          <Button size="lg" href="/auth">Create account</Button>
          <Button size="lg" variant="outline" href="/demo">Try the demo</Button>
        </div>
      </div>
    </div>
  </div>
</section>
