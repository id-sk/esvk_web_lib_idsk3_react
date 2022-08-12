import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Accordion, AccordionListGroup, Input } from '../components/Atoms';
import '/src/styles/idsk3_theme.css';

export default {
  title: 'Atoms/Accordion',
  component: Accordion
} as ComponentMeta<typeof Accordion>;

const TemplateGroup: ComponentStory<typeof Accordion> = (args) => (
  <AccordionListGroup>
    <Accordion index={1} {...args} />
    <Accordion {...args} />
    <Accordion index={2} {...args} />
  </AccordionListGroup>
);

const Template: ComponentStory<typeof Accordion> = (args) => <Accordion {...args} />;

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
export const ListGroup = TemplateGroup.bind({});
ListGroup.args = {
  heading: <h4>Základné údaje</h4>,
  subTitle: 'V tejto časti môžete meniť svoje základné údaje.',
  children: (
    <>
      <h4>Filtrovania</h4>
      <Input placeholder="Zadajte meno a priezvisko" label="Meno Priezvisko" />
    </>
  )
};
