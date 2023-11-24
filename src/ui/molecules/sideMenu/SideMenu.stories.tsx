import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SideMenu } from './SideMenu';

export default {
  title: 'Organisms/Side Menu',
  component: SideMenu,
} as ComponentMeta<typeof SideMenu>;

const Template: ComponentStory<typeof SideMenu> = (args) => <SideMenu {...args} />;

export const WithMenuItems = Template.bind({});
WithMenuItems.args = {
  open: false,
};
