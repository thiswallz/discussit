<template>
  <quill-editor
    theme="snow"
    toolbar="essential"
    v-model:content="value"
    @update:content="handleContentChange"
    content-type="html"
    placeholder="her ...."
  ></quill-editor>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    content: { type: String },
  },
  emits: ['change'],
  data() {
    return {
      value: '',
      debounce: null as any,
    };
  },
  methods: {
    handleContentChange(value: string) {
      if (this.debounce) {
        clearTimeout(this.debounce);
      }
      this.debounce = setTimeout(() => {
        this.$emit('change', value);
      }, 600);
    },
  },
  watch: {
    content: {
      handler(val) {
        if (!val) {
          this.value = '';
        } else {
          this.value = val;
        }
      },
      deep: true,
      immediate: true,
    },
  },
});
</script>

<style lang="scss" scoped></style>
