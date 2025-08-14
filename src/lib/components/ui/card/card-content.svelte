<script lang="ts" module>
  import { cn, type WithElementRef } from '$lib/utils.js';
  import type { HTMLDivAttributes } from 'svelte/elements';
  export type CardContentProps = WithElementRef<HTMLDivAttributes>;
</script>
<script lang="ts">
  let { class: className, ref = $bindable(null), children, ...rest }: CardContentProps = $props();
</script>
<div bind:this={ref} data-slot="card-content" class={cn('p-6 pt-0', className)} {...rest}>
  {@render children?.()}
</div>
