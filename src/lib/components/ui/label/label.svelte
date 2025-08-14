<script lang="ts" module>
  import { cn, type WithElementRef } from '$lib/utils.js';
  import type { HTMLLabelAttributes } from 'svelte/elements';
  export type LabelProps = WithElementRef<HTMLLabelAttributes>;
</script>

<script lang="ts">
  let { class: className, ref = $bindable(null), children, ...rest }: LabelProps = $props();
</script>

<label
  bind:this={ref}
  data-slot="label"
  class={cn('text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70', className)}
  {...rest}
>
  {@render children?.()}
</label>
