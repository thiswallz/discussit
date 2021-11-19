<template>
  <div
    class="justify-center flex relative box"
    :class="[
      customClass ? customClass : '',
      !size ? 'h-24' : '',
      size === 'medium' ? 'h-20' : '',
      size === 'small' ? 'h-12' : '',
      clickable ? 'cursor-pointer' : 'cursor-default',
      selected ? 'selected': ''
    ]"
  >
    <div class="absolute "
    :class="[
      !size ? 'text-xl top-2 left-10' : '',
      size === 'small' ? 'text-md top-3 left-3' : '',
    ]"
    >
      {{ title }}
    </div>
    <div 
    class="font-extralight"
    :class="[
      !size ? 'text-lg absolute top-10 left-10' : '',
      size === 'medium' ? 'text-lg absolute top-10 left-10' : '',
      size === 'small' ? 'text-md absolute top-3 right-20' : '',
    ]"
    >
      {{ subtitle }}
    </div>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    title: { type: String, required: true },
    size: { type: String, required: true },
    subtitle: { type: String, required: false },
    clickable: { type: Boolean, required: false, default: false },
    selected: { type: Boolean, required: false, default: false },
    customClass: { type: String, required: false, default: 'w-full' },
  },
});
</script>

<style lang="scss" scoped>
.box {
  background-color: var(--global-color-3);
  &.selected{
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
