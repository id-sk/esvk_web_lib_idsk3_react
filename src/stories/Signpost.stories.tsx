import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Signpost } from '../components/Atoms';
import { ArrowForwardIcon } from '../svgIcons/Navigation';
import { ArrowForwardIosIcon } from '../svgIcons/Navigation';
import { HomeIcon } from '../svgIcons/Actions';
import { PublicIcon } from '../svgIcons/Social';
import { SignpostsGroup } from '../components/Atoms/Signpost/Signpost';
import '/src/styles/idsk3_theme.css';

export default {
  title: 'Atoms/Signpost',
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

export const Default = Template.bind({});
Default.args = {
  icon: <HomeIcon />,
  title: 'Very long title',
  children: 'Všetky informácie o vašom sociálnom poistení na jednom mieste',
  arrowIcon: <ArrowForwardIcon />
};

export const WithoutText = Template.bind({});
WithoutText.args = {
  titleIcon: <HomeIcon />,
  title: 'Very long title',
  arrowIcon: <ArrowForwardIcon />
};

export const WithoutIcon = Template.bind({});
WithoutIcon.args = {
  title: 'Very long title',
  children: 'Všetky informácie o vašom sociálnom poistení na jednom mieste',
  arrowIcon: <ArrowForwardIcon />
};

export const WithoutTextAndIcon = Template.bind({});
WithoutTextAndIcon.args = {
  title: 'Very long title',
  arrowIcon: <ArrowForwardIcon />
};

export const WithSocialIcon = Template.bind({});
WithSocialIcon.args = {
  socialIcon: <PublicIcon />,
  title: 'Very long title',
  children: 'Všetky informácie o vašom sociálnom poistení na jednom mieste',
  arrowIcon: <ArrowForwardIcon />
};

export const Group = TemplateGroup.bind({});
Group.args = {
  title: 'Very long title',
  arrowIcon: <ArrowForwardIosIcon />
};
