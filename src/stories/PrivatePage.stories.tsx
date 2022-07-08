import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PrivatePage } from '../components/Templates';
import '/src/styles/idsk3_theme.css';

import { Private as PrivateHeader } from './HeaderContainer.stories';
import { EventCard } from '../components/Molecules';
import { CardsContainer } from '../components/Atoms';

export default {
  title: 'Templates/PrivatePage',
  component: PrivatePage,
  parameters: {
    layout: 'fullscreen'
  }
} as ComponentMeta<typeof PrivatePage>;

const titleSection = <h2>Kalendár povinností</h2>;

const eventCardProps = {
  color: '#126DFF',
  title: 'Daň z prijmov fyzických a právnických osôb za rok 2021',
  date: new Date().getTime(),
  children: (
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisc elit, sed do eiusmod tempor incid ut labore et
      dolore magna aliqua.
    </p>
  )
};

const Template: ComponentStory<typeof PrivatePage> = (args) => (
  <PrivatePage {...args}>
    <CardsContainer>
      <EventCard {...eventCardProps} />
      <EventCard {...eventCardProps} />
      <EventCard {...eventCardProps} />
      <EventCard {...eventCardProps} />
      <EventCard {...eventCardProps} />
      <EventCard {...eventCardProps} />
      <EventCard {...eventCardProps} />
      <EventCard {...eventCardProps} />
    </CardsContainer>
  </PrivatePage>
);

export const Default = Template.bind({});
Default.args = {
  titleSection,
  header: <PrivateHeader />
};
