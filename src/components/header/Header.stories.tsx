import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import { Header } from './Header';

export default {
  title: 'Components - Organisms/Header',
  component: Header,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
  isSideMenuOpen: true,
};

export const WithMenuToggle = Template.bind({});
WithMenuToggle.parameters = {
  viewport: {
    defaultViewport: 'galaxys9',
  },
};
WithMenuToggle.args = {
  ...Default.args,
  setIsSideMenuOpen: () => {},
};
