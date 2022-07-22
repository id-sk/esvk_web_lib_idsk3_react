import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArticleCard } from '../components/Molecules';
import '/src/styles/idsk3_theme.css';

const placeholderImg = require('./images/article-placeholder.jpg');

export default {
  title: 'Molecules/ArticleCard',
  component: ArticleCard
} as ComponentMeta<typeof ArticleCard>;

const Template: ComponentStory<typeof ArticleCard> = (args) => <ArticleCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  heading: <a href="/">Nadpis</a>,
  date: new Date().getTime(),
  tags: ['Lorem', 'ipsum', 'consectetur'],
  featuredImg: <img src={placeholderImg} />,
  children:
    'V tejto časti nájdete všetky podtrebné informácie spojené s používaním a vytvorením občianského preukazu s čipom'
};
