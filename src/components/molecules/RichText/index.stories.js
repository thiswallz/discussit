import RichText from './index.vue';

export default {
  title: 'components/molecules/richText',
  component: RichText,
};

export const Default = () => ({
  components: { RichText },
  template: '<RichText />',
});
