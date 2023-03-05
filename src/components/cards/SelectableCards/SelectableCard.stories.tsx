import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import SelectableCard from './SelectableCard';

export default {
  title: 'Lib/Cards/SelectableCard',
  component: SelectableCard,
} as ComponentMeta<typeof SelectableCard>;

const Template: ComponentStory<typeof SelectableCard> = (args) => <SelectableCard {...args} />;

export const Card = Template.bind({});
Card.args = {
  value: 3,
  selected: false
};
