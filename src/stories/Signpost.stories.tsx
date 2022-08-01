import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Signpost } from '../components/Molecules';
import { ArrowForwardIosIcon } from '../svgIcons/Navigation';
import { HomeIcon } from '../svgIcons/Actions';
import { SignpostsGroup } from '../components/Molecules/Signpost/Signpost';
import '/src/styles/idsk3_theme.css';

export default {
  title: 'Molecules/Signpost',
  component: Signpost
} as ComponentMeta<typeof Signpost>;

const TemplateGroup: ComponentStory<typeof Signpost> = (args) => (
  <SignpostsGroup>
    <Signpost {...args} />
    <Signpost {...args} />
    <Signpost {...args} />
  </SignpostsGroup>
);

const Template: ComponentStory<typeof Signpost> = (args) => <Signpost {...args} />;

export const Horizontal = Template.bind({});
Horizontal.args = {
  icon: <HomeIcon />,
  heading: 'Very long title',
  children: 'Všetky informácie o vašom sociálnom poistení na jednom mieste',
  layout: 'horizontal',
  href: '/'
};

export const Vertical = Template.bind({});
Vertical.args = {
  icon: <HomeIcon />,
  heading: 'Very long title',
  children: 'Všetky informácie o vašom sociálnom poistení na jednom mieste',
  layout: 'vertical',
  href: '/'
};

export const WithoutIcon = Template.bind({});
WithoutIcon.args = {
  heading: 'Very long title',
  children: 'Všetky informácie o vašom sociálnom poistení na jednom mieste',
  layout: 'vertical',
  href: '/'
};

export const WithActionButton = Template.bind({});
WithActionButton.args = {
  icon: <HomeIcon />,
  heading: 'Very long title',
  children: 'Všetky informácie o vašom sociálnom poistení na jednom mieste',
  layout: 'horizontal',
  href: '/',
  actionButton: { label: 'Action' }
};

export const Group = TemplateGroup.bind({});
Group.args = {
  heading: 'Very long title',
  arrowIcon: <ArrowForwardIosIcon />,
  layout: 'vertical'
};
