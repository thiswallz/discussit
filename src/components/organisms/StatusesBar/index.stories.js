import StatusesBar from './index.vue';

export default {
  title: 'components/organisms/statusesBar',
  component: StatusesBar,
};

export const Default = () => ({
  components: { StatusesBar },
  template: '<StatusesBar />',
});

export const List = (args) => ({
  components: { StatusesBar },
  template: '<StatusesBar v-bind="args" />',
  setup() {
    return { args };
  }
});

List.args = {
  statuses: [
    { title: 'My title'}, 
    { title: 'My title 2'}, 
  ]
};