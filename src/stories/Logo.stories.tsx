import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import '/src/styles/idsk3_theme.css';
import { Logo } from '../components';
import LogoImage from '../svgImages/Logos/LogoImage';

export default {
  title: 'Atoms/Logo',
  component: Logo
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = (args) => (
  <button>
    <Logo {...args} />
  </button>
);

export const Default = Template.bind({});
Default.args = {
  image: <LogoImage />,
  title: 'Register rozhodnutí',
  subtitle: 'Ústredný portál verejnej správy'
};

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
  image: <LogoImage />,
  title: 'Register rozhodnutí'
};

export const OnlyImage = Template.bind({});
OnlyImage.args = {
  image: <LogoImage />
};

export const ShortTitle = Template.bind({});
ShortTitle.args = {
  image: <LogoImage />,
  title: 'Ústredný portál verejnej správy',
  shortTitle: 'ÚPVS',
  subtitle: 'Moje Slovensko',
  shortSubtitle: 'Moje Slovensko'
};

export const ShortSubtitle = Template.bind({});
ShortSubtitle.args = {
  image: <LogoImage />,
  title: 'Moje Slovensko',
  subtitle: 'Ústredný portál verejnej správy',
  shortSubtitle: 'ÚPVS'
};
