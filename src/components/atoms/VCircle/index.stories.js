import VCircle from './index.vue';

export default {
  title: 'components/atoms/vcircle',
  component: VCircle,
};

export const Default = () => ({
  components: { VCircle },
  template: '<VCircle />',
});

export const WithText = () => ({
  components: { VCircle },
  template: '<VCircle>My text</VCircle>',
});

export const CustomSize = (args) => ({
  components: { VCircle },
  template: '<VCircle v-bind="args" >My text</VCircle',
  setup() {
    return { args };
  }
});

CustomSize.args = {
  width: '120px',
  height: '120px',
};

export const CustomClass= (args) => ({
  components: { VCircle },
  template: '<VCircle v-bind="args" >My text</VCircle>',
  setup() {
    return { args };
  }
});

CustomClass.args = {
  customClass: 'bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500',
};

export const WidthIcon = (args) => ({
  components: { VCircle },
  template: '<VCircle v-bind="args" >My text</VCircle>',
  setup() {
    return { args };
  }
});

WidthIcon.args = {
  iconSrc: 'https://raw.githubusercontent.com/sushiswap/sushi-content/master/products/xsushi.png',
};

