import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { UserInfo } from './UserInfo';

export default {
  title: 'Lib/UserInfo',
  component: UserInfo,
} as ComponentMeta<typeof UserInfo>;

const Template: ComponentStory<typeof UserInfo> = (args) => <UserInfo {...args} />;

export const UserInfoExample = Template.bind({});
UserInfoExample.args = {
  player: {
    guid: "ddfdf",
    name: "Adam",
    isSpectator: false,
    avatarId: 1
  }
};
