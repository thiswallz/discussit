import TitleHeader from './index.vue';

export default {
  title: 'components/atoms/titleHeader',
  component: TitleHeader,
};

export const Default = () => ({
  components: { TitleHeader },
  template: '<TitleHeader title="Example of a title" />',
});

export const Clickable = () => ({
  components: { TitleHeader },
  template: '<TitleHeader title="Example of a title" :clickable="true" />',
});

export const SubHeader = () => ({
  components: { TitleHeader },
  template:
    '<TitleHeader title="Example of a title" subtitle="My subtitle ......" />',
});


export const Selected = () => ({
  components: { TitleHeader },
  template:
    '<TitleHeader title="Example of a title" subtitle="My subtitle ......" :selected="true" />',
});


export const CustomCss = (args) => ({
  components: { TitleHeader },
  template: '<TitleHeader v-bind="args" />',
  setup() {
    return { args };
  },
});

CustomCss.args = {
  title: 'Example of a title',
  customClass: 'rounded-full',
  subtitle: 'My subtitle ......',
};

export const CustomContent = (args) => ({
  components: { TitleHeader },
  template: '<TitleHeader v-bind="args" ><img width="40" src="https://raw.githubusercontent.com/sushiswap/sushi-content/master/products/xsushi.png"  class="absolute right-10 top-1/3"/></TitleHeader>',
  setup() {
    return { args };
  },
});

CustomContent.args = {
  title: 'Example of a title',
  customClass: 'rounded',
  subtitle: 'My subtitle ......',
};

export const Small = (args) => ({
  components: { TitleHeader },
  template: '<TitleHeader v-bind="args" ><img width="25" src="https://raw.githubusercontent.com/sushiswap/sushi-content/master/products/xsushi.png"  class="absolute right-5 top-1/3" /></TitleHeader>',
  setup() {
    return { args };
  },
});

Small.args = {
  title: 'Example of a title',
  customClass: 'rounded',
  subtitle: 'My subtitle ......',
  size: 'small',
  clickable: true
};

export const Medium = (args) => ({
  components: { TitleHeader },
  template: '<TitleHeader v-bind="args" ><img width="40" src="https://raw.githubusercontent.com/sushiswap/sushi-content/master/products/xsushi.png"  class="absolute right-10 top-1/3"/></TitleHeader>',
  setup() {
    return { args };
  },
});

Medium.args = {
  title: 'Example of a title',
  customClass: 'rounded',
  subtitle: 'My subtitle ......',
  size: 'medium',
};