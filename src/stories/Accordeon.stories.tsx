import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Accordeon, Input } from '../components/Atoms';
import '/src/styles/idsk3_theme.css';

export default {
  title: 'Atoms/Accordeon',
  component: Accordeon
} as ComponentMeta<typeof Accordeon>;

const Template: ComponentStory<typeof Accordeon> = (args) => <Accordeon {...args} />;

export const Default = Template.bind({});
Default.args = {
  heading: <h4>Základné údaje</h4>,
  subTitle: 'V tejto časti môžete meniť svoje základné údaje.',
  children: (
    <>
      <h4>Filtrovania</h4>
      <Input placeholder="Zadajte meno a priezvisko" label="Meno Priezvisko" />
    </>
  )
};
export const InitiallyOpen = Template.bind({});
InitiallyOpen.args = {
  heading: <h4>Základné údaje</h4>,
  subTitle: 'V tejto časti môžete meniť svoje základné údaje.',
  initiallyClosed: false,
  children: (
    <>
      <h4>Filtrovania</h4>
      <Input placeholder="Zadajte meno a priezvisko" label="Meno Priezvisko" />
    </>
  )
};
