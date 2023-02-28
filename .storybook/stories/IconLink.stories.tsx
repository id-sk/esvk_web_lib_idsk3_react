import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { IconLink } from '../../src/components/Atoms';
import '/src/styles/idsk3_theme.css';
import { InfoIcon } from '../../src/svgIcons/Actions';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/IconLink',
  component: IconLink
} as ComponentMeta<typeof IconLink>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof IconLink> = (args) => <IconLink {...args} />;

export const Default = Template.bind({});
Default.args = { children: <InfoIcon />, href: '#' };
