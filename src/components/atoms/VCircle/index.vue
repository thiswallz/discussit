<template>
  <div :class="dynamicClasses" :style="{ width, height }">
    <span class="absolute w-8 h-8 top-4"><img :src="iconSrc" /></span>
    <span
      class="inline-block align-middle text-center"
      :class="{ 'mt-5': iconSrc }"
    >
      <slot></slot>
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    width: { type: String, required: false },
    height: { type: String, required: false },
    customClasses: { type: Array, required: false, default: () => ['bg-gradient-default'] },
    iconSrc: { type: String, required: false },
  },
  computed: {
    dynamicClasses() {
      const classes = [
        'circle',
        'w-28',
        'h-28',
        'justify-center',
        'flex',
        'items-center',
      ];

      return [...classes, ...this.customClasses];
    },
  },
});
</script>

<style lang="scss" scoped>
.circle {
  position: relative;
  background-position: center bottom;
  background-size: contain;
  background-repeat: no-repeat;
  overflow: hidden !important;
  box-shadow: var(--tw-ring-offset-shadow, 0 0 transparent),
    var(--tw-ring-shadow, 0 0 transparent), var(--tw-shadow) !important;
  border-radius: 9999px !important;
  & > span {
    color: var(--color);
  }
}
.bg-gradient-default {
  background-image: linear-gradient(
    224.43deg,
    var(--global-color-1) -36.69%,
    var(--global-color-2) 116.36%
  );
}
</style>
