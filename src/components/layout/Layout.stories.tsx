import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Layout } from './Layout';

export default {
  title: 'Components - Organisms/Layout',
  component: Layout,
} as ComponentMeta<typeof Layout>;

const Template: ComponentStory<typeof Layout> = (args) => <Layout {...args} />;

export const NoChildren = Template.bind({});
NoChildren.args = {
  children: <></>,
};

export const WithChildren = Template.bind({});
WithChildren.args = {
  children: <>
    This is where the contents of our <strong>children prop</strong> appears!
  </>,
};
