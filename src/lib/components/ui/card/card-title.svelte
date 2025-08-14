<script lang="ts" module>
  import { cn, type WithElementRef } from '$lib/utils.js';
  import type { HTMLHeadingAttributes } from 'svelte/elements';
  export type CardTitleProps = WithElementRef<HTMLHeadingAttributes>;
</script>
<script lang="ts">
  let { class: className, ref = $bindable(null), children, ...rest }: CardTitleProps = $props();
</script>
<h3 bind:this={ref} data-slot="card-title" class={cn('text-lg font-semibold leading-none tracking-tight', className)} {...rest}>
  {@render children?.()}
</h3>
