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
    <template #default="{ item }">
      <div
        class="flex flex-row flex-wrap ml-4 mb-4"
        v-if="item && item.discussions"
      >
        <Diamond
          v-for="(discussion, index) in item.discussions"
          :key="index"
          class="ml-1"
        />
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

<style lang="scss" scoped>
::v-deep {
  .bg-gradient-default {
    background-image: none;
  }
  .box {
    .box--content {
      @apply mt-8;
      color:red;
    }
  }
}
</style>
