<template>
  <div>
    Text fields:
    <quill-editor theme="snow"></quill-editor>

    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {},
});
</script>

<style lang="scss" scoped></style>
