import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TextSignpost } from '../../src/components/Atoms';
import '/src/styles/idsk3_theme.css';

export default {
  title: 'Atoms/TextSignpost',
  component: TextSignpost
} as ComponentMeta<typeof TextSignpost>;

const Template: ComponentStory<typeof TextSignpost> = (args) => <TextSignpost {...args} />;

export const Default = Template.bind({});
Default.args = {
  heading: 'Very long title',
  children: 'Všetky informácie o vašom sociálnom poistení na jednom mieste',
  href: '#'
};

export const WithSubtitle = Template.bind({});
WithSubtitle.args = {
  heading: 'Very long title',
  subtitle: 'Very long subtitle',
  children: 'Všetky informácie o vašom sociálnom poistení na jednom mieste',
  href: '#'
};
