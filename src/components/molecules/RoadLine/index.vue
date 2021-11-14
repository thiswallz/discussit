<template>
  <div>
    <template v-for="(line, index) in lines" :key="index">
      <box :title="line.title">
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
    lines: { type: String, required: false },
  },
});
</script>

<style lang="scss" >

</style>
