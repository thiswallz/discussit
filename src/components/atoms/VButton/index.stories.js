import VButton from './index.vue';

export default {
  title: 'components/atoms/vbutton',
  component: VButton,
};

export const Primary = () => ({
  components: { VButton },
  template: '<VButton background="#ff0" label="Button" >Ex 1</VButton>',
});
export const Secondary = () => ({
  components: { VButton },
  template: '<VButton background="#ff0" label="😄👍😍💯" >Ex 2</VButton>',
});