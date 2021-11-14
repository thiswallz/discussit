import VButton from './index.vue';

export default {
  title: 'components/atoms/vbutton',
  component: VButton,
};

export const Primary = () => ({
  components: { VButton },
  template: '<VButton>Primary</VButton>',
});

export const Secondary = (args) => ({
  components: { VButton },
  template: '<VButton v-bind="args" >My Text</VButton>',
  setup() {
    return { args };
  }
});

Secondary.args = {
  type: 'secondary',
};

export const Light = (args) => ({
  components: { VButton },
  template: '<VButton v-bind="args" >My Text</VButton>',
  setup() {
    return { args };
  }
});

Light.args = {
  type: 'light',
};