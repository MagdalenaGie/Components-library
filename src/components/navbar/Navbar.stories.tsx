import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {Navbar} from './Navbar';

export default {
    title: 'Lib/Navbar',
    component: Navbar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const BrandedNavbar = Template.bind({});
BrandedNavbar.args = {
    inGame: false
};

export const BrandedNavbarInGame = Template.bind({});
BrandedNavbarInGame.args = {
    player: {
        guid: "sdffgf",
        name: "Adam",
        isSpectator: false,
        avatarId: 1
      },
      gameName: "Galactic voting",
      inGame: true
};