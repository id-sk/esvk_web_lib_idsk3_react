import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Signpost } from '../../src/components/Molecules';
import { ArrowForwardIosIcon } from '../../src/svgIcons/Navigation';
import { HomeIcon } from '../../src/svgIcons/Actions';
import { SignpostsGroup } from '../../src';
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
  href: '#'
};

export const Vertical = Template.bind({});
Vertical.args = {
  icon: <HomeIcon />,
  heading: 'Very long title',
  children: 'Všetky informácie o vašom sociálnom poistení na jednom mieste',
  layout: 'vertical',
  href: '#'
};

export const WithoutIcon = Template.bind({});
WithoutIcon.args = {
  heading: 'Very long title',
  children: 'Všetky informácie o vašom sociálnom poistení na jednom mieste',
  layout: 'vertical',
  href: '#'
};

export const WithActionButton = Template.bind({});
WithActionButton.args = {
  icon: <HomeIcon />,
  heading: 'Very long title',
  children:
    'Všetky informácie o vašom sociálnom poistení na jednom mieste. Všetky informácie o vašom sociálnom poistení na jednom mieste.',
  layout: 'horizontal',
  actionButton: { label: 'Action' }
};

export const Group = TemplateGroup.bind({});
Group.args = {
  heading: 'Very long title in group',
  arrowIcon: <ArrowForwardIosIcon />,
  layout: 'vertical',
  href: '#'
};

export const GroupWithButtons = TemplateGroup.bind({});
GroupWithButtons.args = {
  heading: 'Very long title in group',
  arrowIcon: <ArrowForwardIosIcon />,
  children: 'Všetky informácie o vašom sociálnom poistení na jednom mieste.',
  layout: 'horizontal',
  actionButton: { label: 'Action' }
};
