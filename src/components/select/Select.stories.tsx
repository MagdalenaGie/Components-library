import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Select } from './Select';
import optionsJson from './options.json';


export default {
    title: 'Lib/Form/Select',
    component: Select,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const SelectNotGrouped = Template.bind({});
SelectNotGrouped.args = {
    label: 'Numbers',
    options: optionsJson
};

export const SelectGrouped = Template.bind({});
let groupMap = new Map();
groupMap.set(1, "English")
groupMap.set(2, "Polski")
SelectGrouped.args = {
    label: 'Numbers',
    grouped: true,
    groups: groupMap,
    options: optionsJson
};

// TODO: multiple select
// BLOCKED BY: lack of checkbox
// export const SelectMultiple = Template.bind({});
// SelectNotGrouped.args = {
//     label: 'Numbers',
//     options: optionsJson,
//     multiSelect: true
// };