import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import PlayerCard from './PlayerCard';

export default {
  title: 'Lib/Cards/PlayerCard',
  component: PlayerCard,
} as ComponentMeta<typeof PlayerCard>;

const Template: ComponentStory<typeof PlayerCard> = (args) => <PlayerCard {...args} />;

export const SelectedRenamedCard = Template.bind({});
SelectedRenamedCard.args = {
  value: 3,
  selected: true,
  revealed: true,
  player: {
    guid: "sdffgf",
    name: "Adam",
    isSpectator: false,
    avatarId: 1
  },
  size: "small"
};

export const SpectatorCard = Template.bind({});
SpectatorCard.args = {
  player: {
    guid: "sdffgf",
    name: "Adam",
    isSpectator: true,
    avatarId: 1
  }
};

export const WaitingToSelectCard = Template.bind({});
WaitingToSelectCard.args = {
  selected: false,
  revealed: false,
  player: {
    guid: "sdffgf",
    name: "Adam",
    isSpectator: false,
    avatarId: 1
  }
};

export const SelectedCard = Template.bind({});
SelectedCard.args = {
  value: 3,
  selected: true,
  revealed: false,
  player: {
    guid: "sdffgf",
    name: "Adam",
    isSpectator: false,
    avatarId: 1
  }
};
