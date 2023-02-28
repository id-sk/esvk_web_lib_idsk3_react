import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArticleCard } from '../../src/components/Molecules';
import '/src/styles/idsk3_theme.css';

const placeholderImg = require('./images/article-placeholder.jpg');

export default {
  title: 'Molecules/ArticleCard',
  component: ArticleCard
} as ComponentMeta<typeof ArticleCard>;

const Template: ComponentStory<typeof ArticleCard> = (args) => <ArticleCard {...args} />;

export const Horizontal = Template.bind({});
Horizontal.args = {
  heading: <a href="/">Nadpis</a>,
  date: new Date().getTime(),
  tags: ['Lorem ipsum', 'ipsum', 'consectetur'],
  featuredImg: <img src={placeholderImg} />,
  children:
    'V tejto časti nájdete všetky podtrebné informácie spojené s používaním a vytvorením občianského preukazu s čipom',
  dateFormatString: 'dd. MM. yyyy'
};

export const Vertical = Template.bind({});
Vertical.args = {
  heading: <a href="/">Nadpis</a>,
  layout: 'vertical',
  date: new Date().getTime(),
  tags: ['Lorem', 'ipsum', 'consectetur'],
  featuredImg: <img src={placeholderImg} />,
  children:
    'V tejto časti nájdete všetky podtrebné informácie spojené s používaním a vytvorením občianského preukazu s čipom'
};

export const WithoutDate = Template.bind({});
WithoutDate.args = {
  heading: <a href="/">Nadpis</a>,
  tags: ['Lorem', 'ipsum', 'consectetur'],
  featuredImg: <img src={placeholderImg} />,
  children:
    'V tejto časti nájdete všetky podtrebné informácie spojené s používaním a vytvorením občianského preukazu s čipom'
};

export const WithoutImage = Template.bind({});
WithoutImage.args = {
  heading: <a href="/">Nadpis</a>,
  date: new Date().getTime(),
  tags: ['Lorem', 'ipsum', 'consectetur'],
  children:
    'V tejto časti nájdete všetky podtrebné informácie spojené s používaním a vytvorením občianského preukazu s čipom'
};
