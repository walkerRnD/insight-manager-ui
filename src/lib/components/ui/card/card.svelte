<script lang="ts" module>
  import { cn, type WithElementRef } from '$lib/utils.js';
  import type { HTMLDivAttributes } from 'svelte/elements';
  export type CardProps = WithElementRef<HTMLDivAttributes>;
</script>

<script lang="ts">
  let { class: className, ref = $bindable(null), children, ...rest }: CardProps = $props();
</script>

<div
  bind:this={ref}
  data-slot="card"
  class={cn('rounded-xl border bg-card text-card-foreground shadow-sm', className)}
  {...rest}
>
  {@render children?.()}
</div>
