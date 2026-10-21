<script setup lang="ts">
import { provide } from 'vue';
import { paramInfoRegistryKey, type ParamInfoEntry } from './param-group.mts';

const entries: ParamInfoEntry[] = [];

provide(paramInfoRegistryKey, {
  entries,
  register(entry: ParamInfoEntry) {
    //reject duplicates when adding to registry
    if (!entries.some((item) => item.kind === entry.kind)) {
      entries.push(entry);
    }
  }
});
</script>

<template>
  <slot />
</template>
