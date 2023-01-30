import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Chart } from './Chart';

export default {
  title: 'Lib/Chart',
  component: Chart,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Chart>;

const Template: ComponentStory<typeof Chart> = (args) => <Chart {...args} />;

export const ResultChart = Template.bind({});
ResultChart.args = {
  votes: [1, 3, 5, 3, 3, 2, 5]
};
