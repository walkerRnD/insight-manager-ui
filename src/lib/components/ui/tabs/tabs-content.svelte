<script lang="ts" module>
  import { cn, type WithElementRef } from '$lib/utils.js';
  import type { HTMLDivAttributes } from 'svelte/elements';
  export type TabsContentProps = WithElementRef<HTMLDivAttributes> & { value: string };
</script>
<script lang="ts">
  import { getContext } from 'svelte';
  const tabs = getContext<{ value?: string }>('tabs')!;
  let { class: className, ref = $bindable(null), value, children, ...rest }: TabsContentProps = $props();
  const selected = () => tabs.value === value;
</script>
<div
  bind:this={ref}
  role="tabpanel"
  hidden={!selected()}
  data-state={selected() ? 'active' : 'inactive'}
  data-slot="tabs-content"
  class={cn('mt-2 outline-none', className)}
  {...rest}
>
  {@render children?.()}
</div>
