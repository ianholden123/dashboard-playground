import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Icons } from './Icons';

export default {
  title: 'Atoms/Icons',
  component: Icons,
} as ComponentMeta<typeof Icons>;

const Template: ComponentStory<typeof Icons> = (args) => <Icons {...args} />;

export const ReactIcon = Template.bind({});
ReactIcon.args = {
  name: 'React',
};

export const EmailIcon = Template.bind({});
EmailIcon.args = {
  name: 'Email',
};
