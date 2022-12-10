import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Input } from './Input';

export default {
  title: 'Lib/Form/Input',
  component: Input,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const InputName = Template.bind({});
InputName.args = {
  message: 'Entered name is invalid',
  label: 'Your name',
  placeholder: 'Enter your name'
};

export const InputDisabled = Template.bind({});
InputDisabled.args = {
  label: 'Disabled input',
  message: 'Disabled message',
  placeholder: 'Disabled holder',
  disabled: true
};


