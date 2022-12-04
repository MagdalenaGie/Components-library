import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { PlayerCard } from './PlayerCard';

export default {
  title: 'Lib/Cards/PlayerCard',
  component: PlayerCard,
} as ComponentMeta<typeof PlayerCard>;

const Template: ComponentStory<typeof PlayerCard> = (args) => <PlayerCard {...args} />;

export const Card = Template.bind({});
Card.args = {
  value: 3,
  selected: true,
  revealed: true,
  player: {
    guid: "sdffgf",
    name: "Adam",
    isSpectator: false,
    avatarId: 1
  }
};
