import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Feedback } from '../../src/components/Molecules';
import '/src/styles/idsk3_theme.css';

export default {
  title: 'Molecules/Feedback',
  component: Feedback
} as ComponentMeta<typeof Feedback>;

const Template: ComponentStory<typeof Feedback> = (args) => (
  <Feedback {...args}>Boli tieto informácie pre vás užitočné?</Feedback>
);

export const Default = Template.bind({});
Default.args = {
  yesButtonProps: { children: 'Áno' },
  noButtonProps: { children: 'Nie' }
};

export const WithReportButton = Template.bind({});
WithReportButton.args = {
  yesButtonProps: { children: 'Áno' },
  noButtonProps: { children: 'Nie' },
  reportButtonProps: { children: 'Nahlásiť chybu' }
};
