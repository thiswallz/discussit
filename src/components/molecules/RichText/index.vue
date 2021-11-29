<template>
    <quill-editor theme="snow" :content="content" content-type="html"></quill-editor>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    content: { type: String },
  },
});
</script>

<style lang="scss" scoped></style>
