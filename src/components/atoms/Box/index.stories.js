import Box from './index.vue';

export default {
  title: 'components/atoms/box',
  component: Box,
};

export const Default = () => ({
  components: { Box },
  template: '<Box />',
});

export const WidthTitle = (args) => ({
  components: { Box },
  template: '<Box v-bind="args" />',
  setup() {
    return { args };
  }
});

WidthTitle.args = {
  title: 'My title',
};

export const WidthContent = (args) => ({
  components: { Box },
  template: `<Box v-bind="args" >
    <div style="height: 25px; width: 25px; background-color: #bbb; border-radius: 50%; "></div>
    <div style="height: 25px; width: 25px; background-color: #bbb; border-radius: 50%; "></div>
    <div style="height: 25px; width: 25px; background-color: #bbb; border-radius: 50%; "></div>
    <div style="height: 25px; width: 25px; background-color: #bbb; border-radius: 50%; "></div>
    <div style="height: 25px; width: 25px; background-color: #bbb; border-radius: 50%; "></div>
    <div style="height: 25px; width: 25px; background-color: #bbb; border-radius: 50%; "></div>
    <div style="height: 25px; width: 25px; background-color: #bbb; border-radius: 50%; "></div>
    <div style="height: 25px; width: 25px; background-color: #bbb; border-radius: 50%; "></div>
    <div style="height: 25px; width: 25px; background-color: #bbb; border-radius: 50%; "></div>
  </Box>`,
  setup() {
    return { args };
  }
});

WidthContent.args = {
  title: 'My box with content',
};

export const CustomClass = (args) => ({
  components: { Box },
  template: '<Box v-bind="args" />',
  setup() {
    return { args };
  }
});

CustomClass.args = {
  customClass: 'w-28 h-28',
};