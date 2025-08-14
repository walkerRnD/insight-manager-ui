<script lang="ts" module>
  import { cn, type WithElementRef } from '$lib/utils.js';
  import type { HTMLDivAttributes } from 'svelte/elements';
  export type CardHeaderProps = WithElementRef<HTMLDivAttributes>;
</script>
<script lang="ts">
  let { class: className, ref = $bindable(null), children, ...rest }: CardHeaderProps = $props();
</script>
<div bind:this={ref} data-slot="card-header" class={cn('flex flex-col space-y-1.5 p-6', className)} {...rest}>
  {@render children?.()}
</div>
