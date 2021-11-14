<template>
  <div class="diamond" :style="{ background: color, borderColor }">
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    color: { type: String, required: false },
    borderColor: { type: String, required: false },
  }
})
</script>

<style lang="scss" scoped>
.diamond{
  width: 15px;
  height: 15px;
  border: 2px solid var(--border-color);
  background: var(--secondary-color);
  -webkit-transform: rotate(45deg) skew(15deg, 15deg);
  -moz-transform: rotate(45deg) skew(15deg, 15deg);
  -ms-transform: rotate(45deg) skew(15deg, 15deg);
  -o-transform: rotate(45deg) skew(15deg, 15deg);
  transform: rotate(45deg) skew(15deg, 15deg);
}
</style>
