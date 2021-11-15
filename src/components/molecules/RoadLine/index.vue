<template>
  <div :class="{ 'flex w-auto single-line': singleLine, 'mt-10': $slots.header }" class="road-line">
    <template v-for="(line, index) in lines" :key="index">
      <box
        :title="$slots.header ? null : line.title"
        :customClass="boxClass"
        @click="$emit('onBoxClick', line)"
      >
        <v-circle v-if="$slots.header" class="-top-10" :icon-src="line.ico">
          <slot name="header" :title="line.title"></slot>
        </v-circle>
        <slot :title="line.title"></slot>
      </box>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Box from '@/components/atoms/Box/index.vue';
import VCircle from '@/components/atoms/VCircle/index.vue';

export default defineComponent({
  components: {
    Box,
    VCircle
  },
  props: {
    lines: { type: Object },
    boxClass: { type: String },
    singleLine: { type: Boolean, default: false },
  },
});
</script>

<style lang="scss" scoped>
.road-line {
  .box{
    ::v-deep .circle{
      @apply absolute left-1/2 transform -translate-x-1/2;
    }
  }
  &.single-line {
    .box:last-child {
      @apply rounded-r;
    }
    .box:first-child {
      @apply rounded-l;
    }
    .box:not(:last-child) {
      @apply mr-2;
    }
  }
}
</style>
