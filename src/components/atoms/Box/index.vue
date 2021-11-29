<template>
  <div 
    :class="dynamicClasses" 
    class=" justify-center flex items-center relative box" >
    <div class="absolute top-10">
      {{title}}
    </div>
    <div class="box--content mt-20 mb-2 w-full">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    title: { type: String, required: false },
    customClasses: { type: Array, required: false, default: ()=>['w-full'] },
    selected: { type: Boolean, required: false },
  },
  computed: {
    dynamicClasses(){
      const classes = [this.selected ? 'selected' : '']
      return [ ...classes, ...this.customClasses]
    }
  }
});
</script>

<style lang="scss" scoped>
.box {
  background-color: var(--border-color);
  &__content {
    display: flex;
    flex-wrap: wrap;
  }
  cursor: pointer;
  &:hover {
    background-image: linear-gradient(
      224.43deg,
      var(--global-color-1) -16.69%,
      var(--global-color-2) 86.36%
    );
  }
  &.selected{
     background-color: var(--global-color-2);
  }
}
</style>
