<script lang="ts" module>
  import { cn, type WithElementRef } from '$lib/utils.js';
  import type { HTMLDivAttributes } from 'svelte/elements';
  export type TabsProps = WithElementRef<HTMLDivAttributes> & {
    value?: string;
    defaultValue?: string;
  };
</script>

<script lang="ts">
  import { setContext } from 'svelte';
  let { class: className, ref = $bindable(null), value = $bindable<string | undefined>(undefined), defaultValue, children, ...rest }: TabsProps = $props();
  if (value == null && defaultValue) value = defaultValue;
  const ctx = {
    get value() { return value as string | undefined; },
    setValue: (v: string) => (value = v)
  };
  setContext('tabs', ctx);
</script>

<div bind:this={ref} data-slot="tabs" class={cn('w-full', className)} {...rest}>
  {@render children?.()}
</div>
