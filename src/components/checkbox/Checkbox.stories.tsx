import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Checkbox from './Checkbox';

export default {
  title: 'Lib/Form/Checkbox',
  component: Checkbox,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args} />;

export const CheckboxExample = Template.bind({});
let isChecked = false;
CheckboxExample.args = {
  label: 'I am a spectator',
  isChecked: isChecked,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => {isChecked = e.target.checked}
};