<script setup lang="ts">
import { computed } from 'vue';
import './param-info.css';
import config from './param-info.mts';

type Requirement = 'always' | 'cond' | 'no'
type Sending = 'always' | 'platform' | 'cond'

const props = defineProps<{
  req: Requirement
  sent?: Sending
}>();

const markers = computed(() => {
  const result: {
    key: string
    symbol: string
    description: string
    kind: string
  }[] = []

  if (props.req !== 'no') {
    result.push({
      key: 'requirement',
      symbol: props.req === 'always' ? config.symbol.requirementAlways : config.symbol.requirementConditional,
      description: props.req === 'always'
        ? config.desc.requirementAlways
        : config.desc.requirementConditional,
      kind: props.req === 'always' ? `requirement-always` : `requirement-conditional`
    });
  }

  //
  if (props.req !== 'always') {
    if (props.sent === 'always') {
      result.push({
        key: 'sending',
        symbol: config.symbol.sendingAlways,
        description: config.desc.sendingAlways,
        kind: 'sending-always'
      });
    } else if (props.sent === 'platform') {
      result.push({
        key: 'sending',
        symbol: config.symbol.sendingPlatform,
        description: config.desc.sendingPlatform,
        kind: 'sending-platform'
      });
    } else if (props.sent === 'cond') {
      result.push({
        key: 'sending',
        symbol: config.symbol.sendingConditional,
        description: config.desc.sendingConditional,
        kind: 'sending-conditional'
      });
    }
  }

  return result;
});
</script>

<template v-if="markers.length">
    <template v-for="marker in markers" :key="marker.key">&nbsp;<sup
            class="param-info__marker"
            :class="`param-info__${marker.kind}`"
            :title="marker.description"
            ><b>{{ marker.symbol }}</b></sup>
    </template>
</template>
