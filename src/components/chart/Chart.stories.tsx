import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Chart from './Chart';

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

export const ResultSmallerChart = Template.bind({});
ResultSmallerChart.args = {
  votes: [3, 5, 3, 3, 5]
};

export const ResultBiggerChart = Template.bind({});
ResultBiggerChart.args = {
  votes: [5, 8, 13, 21, 34, 13, 13, 21, 13]
};
