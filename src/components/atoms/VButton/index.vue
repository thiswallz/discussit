<template>
  <button v-bind="$attrs">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  inheritAttrs: false,
})
export default class VButton extends Vue {}
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
}
</style>
