import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Tooltip } from '../components/Atoms';
import '/src/styles/idsk3_theme.css';
import { InfoIcon } from '../svgIcons/Actions';
import { PrimaryButton } from '../components';

export default {
  title: 'Atoms/Tooltip',
  component: Tooltip
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = (args) => (
  <div className="flex justify-center mt-[200px]">
    <Tooltip {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  tooltip:
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium incidunt adipisci voluptates magni pariatur ad nisi, temporibus nihil. Quisquam, hic? Est harum dignissimos praesentium nemo deleniti nobis magnam, repellendus assumenda?',
  children: <InfoIcon className="w-6 h-6" />
};
export const PositionUp = Template.bind({});
PositionUp.args = {
  tooltip:
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium incidunt adipisci voluptates magni pariatur ad nisi, temporibus nihil. Quisquam, hic? Est harum dignissimos praesentium nemo deleniti nobis magnam, repellendus assumenda?',
  children: <InfoIcon className="w-6 h-6" />,
  positionUp: true
};
export const AlignLeft = Template.bind({});
AlignLeft.args = {
  tooltip:
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium incidunt adipisci voluptates magni pariatur ad nisi, temporibus nihil. Quisquam, hic? Est harum dignissimos praesentium nemo deleniti nobis magnam, repellendus assumenda?',
  children: <InfoIcon className="w-6 h-6" />,
  alignLeft: true
};
export const AlignLeftPositionUp = Template.bind({});
AlignLeftPositionUp.args = {
  tooltip:
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium incidunt adipisci voluptates magni pariatur ad nisi, temporibus nihil. Quisquam, hic? Est harum dignissimos praesentium nemo deleniti nobis magnam, repellendus assumenda?',
  children: <InfoIcon className="w-6 h-6" />,
  alignLeft: true,
  positionUp: true
};
export const Short = Template.bind({});
Short.args = {
  tooltip: 'Lorem ipsum',
  children: <InfoIcon className="w-6 h-6" />
};
export const CustomChildren = Template.bind({});
CustomChildren.args = {
  tooltip: 'Lorem ipsum',
  children: <PrimaryButton>Button</PrimaryButton>
};
