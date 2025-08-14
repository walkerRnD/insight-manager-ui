<script lang="ts" module>
  import { cn, type WithElementRef } from '$lib/utils.js';
  import type { HTMLButtonAttributes } from 'svelte/elements';
  export type TabsTriggerProps = WithElementRef<HTMLButtonAttributes> & { value: string };
</script>
<script lang="ts">
  import { getContext } from 'svelte';
  const tabs = getContext<{
    value?: string;
    setValue: (v: string) => void;
  }>('tabs')!;
  let { class: className, ref = $bindable(null), value, children, ...rest }: TabsTriggerProps = $props();
  const selected = () => tabs.value === value;
</script>
<button
  type="button"
  bind:this={ref}
  role="tab"
  aria-selected={selected()}
  data-state={selected() ? 'active' : 'inactive'}
  data-slot="tabs-trigger"
  class={cn(
    'inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm',
    className
  )}
  on:click={() => tabs.setValue(value)}
  {...rest}
>
  {@render children?.()}
</button>
