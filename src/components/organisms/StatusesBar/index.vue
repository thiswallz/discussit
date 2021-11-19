<template>
  <div>
    <RoadLine
      :lines="statuses"
      box-class="flex-auto"
      @onBoxClick="(line) => $emit('select', line)"
      single-line
    >
      <template v-slot:default="slotProps">
        <div>My textsssss {{ slotProps.title }}</div>
        <Diamond />
        <Diamond />
        <Diamond />
        <Diamond />
        <Diamond />
        <Diamond />
        <Diamond />
        <Diamond />
        <Diamond />
        <Diamond />
        <Diamond />
        <Diamond />
        <Diamond />
        <Diamond />
      </template>
    </RoadLine>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import RoadLine from '@/components/molecules/RoadLine/index.vue';
import Diamond from '@/components/atoms/Diamond/index.vue';

export default defineComponent({
  components: {
    RoadLine,
    Diamond,
  },
  props: {
    statuses: { type: Object },
  }
});
</script>

<style lang="scss" scoped></style>
