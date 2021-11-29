<template>
  <RoadLine
    :lines="statuses"
    :box-classes="['flex-1']"
    class="w-full pl-5 pr-5"
    @onBoxClick="(line) => $emit('select', line)"
    single-line
  >
    <template #header="{ item }">
      <font-awesome-icon
        :icon="item.icon"
        class="absolute top-5 left-1/2 transform -translate-x-1/2"
      />
      {{ item.title }}
    </template>
    <template #default>
      <div class="flex ml-5 mb-5">
        <Diamond />
        <Diamond />
        <Diamond />
        <Diamond />
        <Diamond />
        <Diamond />
        <Diamond />
      </div>
    </template>
  </RoadLine>
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
    statuses: { type: Array },
  },
});
</script>

<style lang="scss" scoped></style>
