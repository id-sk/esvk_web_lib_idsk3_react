import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Progress } from '../../src/components/Atoms';
import '/src/styles/idsk3_theme.css';

export default {
  title: 'Atoms/Progress',
  component: Progress
} as ComponentMeta<typeof Progress>;
const Template: ComponentStory<typeof Progress> = (args) => <Progress {...args} />;
export const Default = Template.bind({});
Default.args = {
  height: '0.5rem',
  percent: '50%'
};
