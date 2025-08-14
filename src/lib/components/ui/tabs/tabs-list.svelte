<script lang="ts" module>
  import { cn, type WithElementRef } from '$lib/utils.js';
  import type { HTMLDivAttributes } from 'svelte/elements';
  export type TabsListProps = WithElementRef<HTMLDivAttributes>;
</script>
<script lang="ts">
  let { class: className, ref = $bindable(null), children, ...rest }: TabsListProps = $props();
</script>
<div bind:this={ref} role="tablist" data-slot="tabs-list" class={cn('inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground', className)} {...rest}>
  {@render children?.()}
</div>
