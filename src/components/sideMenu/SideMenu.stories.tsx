import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SideMenu } from './SideMenu';

export default {
  title: 'Components - Organisms/Side Menu',
  component: SideMenu,
} as ComponentMeta<typeof SideMenu>;

const Template: ComponentStory<typeof SideMenu> = (args) => <SideMenu {...args} />;

export const WithoutMenuItems = Template.bind({});
WithoutMenuItems.args = {
  menuItems: [],
  open: false,
};

export const WithMenuItems = Template.bind({});
WithMenuItems.args = {
  menuItems: [
    'Link',
    'Link with large label',
    'Link with a really long label that might have to wrap to a few new lines',
  ],
  open: false,
};
