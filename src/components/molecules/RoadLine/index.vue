<template>
  <div :class="{'flex w-auto': singleLine}">
    <template v-for="(line, index) in lines" :key="index">
      <box :title="line.title" :customClass="boxClass" @click="$emit('onBoxClick', line)">
        <slot :title="line.title"></slot>
      </box>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Box from '@/components/atoms/Box/index.vue';

export default defineComponent({
  components: {
    Box
  },
  props: {
    lines: { type: Object },
    boxClass: { type: String },
    singleLine: { type: Boolean, default: false },
  },
});
</script>

<style lang="scss" >

</style>
