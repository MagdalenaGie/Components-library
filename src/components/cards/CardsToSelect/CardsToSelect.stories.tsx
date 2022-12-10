import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CardsToSelect } from './CardsToSelect';

export default {
  title: 'Lib/Cards/CardsToSelect',
  component: CardsToSelect,
} as ComponentMeta<typeof CardsToSelect>;

const Template: ComponentStory<typeof CardsToSelect> = (args) => <CardsToSelect {...args} />;

export const CardsToSelectExample = Template.bind({});
CardsToSelectExample.args = {
  selected: null
};