<script setup lang="ts">
import { computed, inject } from 'vue';
import { paramInfoRegistryKey } from './param-group.mts';

const registry = inject(paramInfoRegistryKey);
const symbolOrder = ['*', '?', 'a', 'p', 'c'];
const entries = computed(() => [...(registry?.entries ?? [])].sort(
    (a, b) => symbolOrder.indexOf(a.symbol) - symbolOrder.indexOf(b.symbol)
));
</script>

<template>
    <small>
        <ul v-if="entries.length" class="param-info__footer">
            <li v-for="entry in entries" :key="`${entry.symbol}-${entry.description}`">
                <sup :class="`param-info__${entry.kind}`"><b>{{ entry.symbol }}</b></sup> - {{ entry.description }}
            </li>
        </ul>
    </small>
</template>
