import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Loader } from '../components/Atoms';
import '/src/styles/idsk3_theme.css';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Loader',
  component: Loader
} as ComponentMeta<typeof Loader>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />;

export const LoaderBasic = Template.bind({});

export const LoaderWithLabel = Template.bind({});
LoaderWithLabel.args = {
  label: 'Please wait ...'
};
