import RoadLine from './index.vue';

export default {
  title: 'components/molecules/roadline',
  component: RoadLine,
};

export const OneItem = () => ({
  components: { RoadLine },
  template: '<RoadLine :lines="[{title: `1 item`}]" />',
});


const lines = [
  {title: `1 item`},
  {title: `2 item`},
  {title: `3 item`},
  {title: `4 item`},
]

export const MultipleItems = (args) => ({
  components: { RoadLine },
  template: '<RoadLine v-bind="args" />',
  setup() {
    return { args };
  }
});

MultipleItems.args = {
  lines
};


export const MultipleItemsSingleLine = (args) => ({
  components: { RoadLine },
  template: '<RoadLine v-bind="args" />',
  setup() {
    return { args };
  }
});

MultipleItemsSingleLine.args = {
  lines,
  singleLine: true
};

export const CustomBoxClass = (args) => ({
  components: { RoadLine },
  template: `<RoadLine v-bind="args">
    <template v-slot:default="slotProps">
      <div style="height: 25px; width: 25px; background-color: #bbb; border-radius: 50%; "></div>
      <div style="height: 25px; width: 25px; background-color: #bbb; border-radius: 50%; "></div>
      <div style="height: 25px; width: 25px; background-color: #bbb; border-radius: 50%; "></div>
      <div style="height: 25px; width: 25px; background-color: #bbb; border-radius: 50%; "></div>
      <div style="height: 25px; width: 25px; background-color: #bbb; border-radius: 50%; "></div>
      <div style="height: 25px; width: 25px; background-color: #bbb; border-radius: 50%; "></div>
      <div style="height: 25px; width: 25px; background-color: #bbb; border-radius: 50%; "></div>
      <div style="height: 25px; width: 25px; background-color: #bbb; border-radius: 50%; "></div>
      <div style="height: 25px; width: 25px; background-color: #bbb; border-radius: 50%; "></div>
      <div style="height: 25px; width: 25px; background-color: #bbb; border-radius: 50%; "></div>
    </template>
  </RoadLine>`,
  setup() {
    return { args };
  }
});

CustomBoxClass.args = {
  lines,
  singleLine: true,
  boxClass: 'flex-auto'
};



