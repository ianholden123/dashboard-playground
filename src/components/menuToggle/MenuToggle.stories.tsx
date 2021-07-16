import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import { MenuToggle } from './MenuToggle';

export default {
  title: 'Components - Atoms/Menu Toggle',
  component: MenuToggle,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'galaxys9',
    },
  },
} as ComponentMeta<typeof MenuToggle>;

const Template: ComponentStory<typeof MenuToggle> = (args) => <MenuToggle {...args} />;

export const Closed = Template.bind({});
Closed.args = {
  isOpen: false,
};

export const Open = Template.bind({});
Open.args = {
  isOpen: true,
};
