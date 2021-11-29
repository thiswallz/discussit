<template>
  <div :class="{ 'flex w-auto single-line': singleLine, 'mt-10': $slots.header }" class="road-line">
    <template v-for="(item, index) in lines" :key="index">
      <box
        :title="$slots.header ? null : item.title"
        :custom-classes="boxClasses"
        :selected="indexSelected === index"
        @click="() => select(item, index)"
      >
        <v-circle v-if="$slots.header" class="-top-10" :icon-src="item.ico">
          <slot name="header" :item="item"></slot>
        </v-circle>
        <slot :item="item"></slot>
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
    boxClasses: { type: Array },
    singleLine: { type: Boolean, default: false },
  },
  data() {
    return {
      indexSelected: 0
    }
  },
  methods: {
    select(item: any, index: number){
      this.indexSelected = index
      this.$emit('onBoxClick', item)
    }
  }
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
