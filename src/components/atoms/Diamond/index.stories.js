import Diamond from './index.vue';

export default {
  title: 'components/atoms/diamond',
  component: Diamond,
};

export const Default = () => ({
  components: { Diamond },
  template: '<Diamond />',
});

export const Custom = (args) => ({
  components: { Diamond },
  template: '<Diamond v-bind="args" />',
  setup() {
    return { args };
  }
});

Custom.args = {
  color: 'blue',
};

export const CustomBorder = (args) => ({
  components: { Diamond },
  template: '<Diamond v-bind="args" />',
  setup() {
    return { args };
  }
});

CustomBorder.args = {
  borderColor: 'red',
};