<script lang="ts" module>
  import { cn, type WithElementRef } from '$lib/utils.js';
  import type { HTMLParagraphAttributes } from 'svelte/elements';
  export type CardDescriptionProps = WithElementRef<HTMLParagraphAttributes>;
</script>
<script lang="ts">
  let { class: className, ref = $bindable(null), children, ...rest }: CardDescriptionProps = $props();
</script>
<p bind:this={ref} data-slot="card-description" class={cn('text-sm text-muted-foreground', className)} {...rest}>
  {@render children?.()}
</p>
