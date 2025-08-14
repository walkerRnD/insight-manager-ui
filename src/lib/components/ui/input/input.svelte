<script lang="ts" module>
  import { cn, type WithElementRef } from '$lib/utils.js';
  import type { HTMLInputAttributes } from 'svelte/elements';
  export type InputProps = WithElementRef<HTMLInputAttributes>;
</script>

<script lang="ts">
  let { class: className, ref = $bindable(null), children, ...rest }: InputProps = $props();
</script>

<input
  bind:this={ref}
  data-slot="input"
  class={cn(
    'flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm shadow-xs transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50',
    className
  )}
  {...rest}
/>



















