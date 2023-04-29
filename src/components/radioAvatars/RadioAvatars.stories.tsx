import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import RadioAvatars from './RadioAvatars';

export default {
  title: 'Lib/Form/RadioAvatars',
  component: RadioAvatars,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof RadioAvatars>;

const Template: ComponentStory<typeof RadioAvatars> = (args) => <RadioAvatars {...args} />;

export const CheckboxExample = Template.bind({});
CheckboxExample.args = {
  avatarIdValue: 1,
  avatarIdSetter: (value: number) => {console.log('value: ', value)}
};