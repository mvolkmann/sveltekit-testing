import Pie from '../lib/Pie.svelte';

export default {
  title: 'Pie',
  component: Pie,
  argTypes: {
    bgColor: {control: 'color'},
    fgColor: {control: 'color'},
    size: {control: 'number'},
    value: {control: 'range'}
  }
};

const Template = props => ({
  Component: Pie,
  props
});

export const Primary = Template.bind({});
Primary.args = {
  bgColor: 'tan',
  fgColor: 'blue',
  size: 50,
  value: 30
};
