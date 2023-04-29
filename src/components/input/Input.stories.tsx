import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Input from './Input';

export default {
  title: 'Lib/Form/Input',
  component: Input,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const InputName = Template.bind({});
let valueVar = "";
InputName.args = {
  inputValue:  valueVar,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => {valueVar = e.target.value},
  label: 'Your name'
};


