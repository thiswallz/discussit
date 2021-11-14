<template>
  <button v-bind="$attrs" :class="[type ? `type--${type}` : '']">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  inheritAttrs: false,
  props: {
    type: { type: String, required: false },
  },
});
</script>

<style lang="scss" scoped>
button {
  background: none;
  border-radius: 0.5em;
  font: inherit;
  padding: 0.75em 2em;
  background-image: linear-gradient(
    to right,
    var(--main-color),
    var(--secondary-color)
  );
  color: var(--color);
  border: none;
  &:hover {
    background-image: linear-gradient(
      to right,
      var(--secondary-color),
      var(--main-color)
    );
  }
  &.type--secondary {
    border: 3px double transparent;
    background-origin: border-box;
    background-clip: padding-box, border-box;
    background-image: linear-gradient(rgb(13, 14, 33), rgb(13, 14, 33)),
      radial-gradient(
        circle at left top,
        var(--main-color),
        var(--secondary-color)
      );
    &:hover {
      background-image: linear-gradient(rgb(13, 14, 33), rgb(13, 14, 33)),
        radial-gradient(
          circle at left top,
          var(--secondary-color),
          var(--main-color)
        );
    }
  }
  &.type--light {
    background-image: none;
    @apply bg-gray-600;
  }
}
</style>
