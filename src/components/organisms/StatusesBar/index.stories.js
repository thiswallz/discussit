import StatusesBar from './index.vue';

export default {
  title: 'components/organisms/statusesBar',
  component: StatusesBar,
};

export const Default = () => ({
  components: { StatusesBar },
  template: '<StatusesBar />',
});

