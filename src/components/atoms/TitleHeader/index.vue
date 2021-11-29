<template>
  <div :class="dynamicClasses">
    <div :class="dynamicTitleClasses">
      {{ title }}
    </div>
    <div :class="dynamicSubTitleClasses">
      {{ subtitle }}
    </div>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Size } from '@/models/Size';

export default defineComponent({
  props: {
    title: { type: String, required: true },
    size: { type: String, required: true },
    subtitle: { type: String, required: false },
    clickable: { type: Boolean, required: false, default: false },
    selected: { type: Boolean, required: false, default: false },
    customClasses: { type: Array, required: false, default: () => ['w-full'] },
    customTitleClasses: { type: Array, required: false, default: () => [] },
    customSubTitleClasses: { type: Array, required: false, default: () => [] },
  },
  computed: {
    dynamicClasses() {
      const classes = [
        !this.size ? 'h-24' : '',
        this.size === Size.Small ? 'h-12' : '',
        this.size === Size.Medium ? 'h-20' : '',
        this.clickable ? 'cursor-pointer' : 'cursor-default',
        this.selected ? 'selected' : '',
        'justify-center',
        'flex',
        'relative',
        'box'
      ];
      return [...classes, ...this.customClasses];
    },
    dynamicTitleClasses() {
      return [
        !this.size ? 'text-xl top-2 left-10' : '',
        this.size === Size.Small ? 'text-md top-3 left-3' : '',
        'absolute',
        ...this.customTitleClasses,
      ];
    },
    dynamicSubTitleClasses() {
      return [
        !this.size ? 'text-lg absolute top-10 left-10' : '',
        this.size === Size.Medium ? 'text-lg absolute top-10 left-10' : '',
        this.size === Size.Small ? 'text-md absolute top-3 right-20' : '',
        'font-extralight',
        ...this.customSubTitleClasses,
      ];
    },
  },
});
</script>

<style lang="scss" scoped>
.box {
  background-color: var(--global-color-3);
  &.selected {
    background-image: linear-gradient(
      224.43deg,
      var(--color) -126.69%,
      var(--global-color-3) 86.36%
    );
  }
  &.cursor-pointer {
    &:hover {
      background-image: linear-gradient(
        224.43deg,
        var(--secondary-color) -16.69%,
        var(--global-color-2) 86.36%
      );
    }
  }
  &__content {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
