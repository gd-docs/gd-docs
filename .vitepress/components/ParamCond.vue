<script setup lang="ts">
type Sending = 'platform' | 'cond' | 'req';

defineProps<{
    req?: boolean
    sent?: Sending
}>();
</script>

<template>
    <div class="param-cond">
        <small>
            <b>
                <span v-if="req" class="param-info__requirement-conditional">Required when:</span>
                <span v-else-if="sent === 'platform'" class="param-info__sending-platform">Sent on platforms:</span>
                <span v-else-if="sent === 'cond'" class="param-info__sending-conditional">Sent when:</span>
                <span v-else-if="sent === 'req'" class="param-info__sending-conditional">Sent when required</span>
            </b> <slot v-if="sent !== 'req'" />
        </small>
    </div>
</template>