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
  heading: <h4 className="underline">Základné údaje</h4>,
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
  heading: <h4 className="underline">Základné údaje</h4>,
  subTitle: 'V tejto časti môžete meniť svoje základné údaje.',
  initiallyClosed: false,
  children: (
    <>
      <h4>Filtrovania</h4>
      <Input placeholder="Zadajte meno a priezvisko" label="Meno Priezvisko" />
    </>
  )
};
export const WithoutSubTitle = Template.bind({});
WithoutSubTitle.args = {
  heading: <h4 className="underline">Základné údaje</h4>,
  children: (
    <>
      <h4>Filtrovania</h4>
      <Input placeholder="Zadajte meno a priezvisko" label="Meno Priezvisko" />
    </>
  )
};
export const Small = Template.bind({});
Small.args = {
  heading: <h4 className="underline">Základné údaje</h4>,
  subTitle: 'V tejto časti môžete meniť svoje základné údaje.',
  size: 'small',
  children: (
    <>
      <h4>Filtrovania</h4>
      <Input placeholder="Zadajte meno a priezvisko" label="Meno Priezvisko" />
    </>
  )
};
export const SmallWithoutSubTitle = Template.bind({});
SmallWithoutSubTitle.args = {
  heading: <h4 className="underline">Základné údaje</h4>,
  size: 'small',
  children: (
    <>
      <h4>Filtrovania</h4>
      <Input placeholder="Zadajte meno a priezvisko" label="Meno Priezvisko" />
    </>
  )
};
export const GrayBackground = Template.bind({});
GrayBackground.args = {
  heading: <h4 className="underline">Základné údaje</h4>,
  subTitle: 'V tejto časti môžete meniť svoje základné údaje.',
  initiallyClosed: false,
  bgGray: true,
  children: (
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
      non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
  )
};
export const ListGroup = TemplateGroup.bind({});
ListGroup.args = {
  heading: <h4 className="underline">Základné údaje</h4>,
  subTitle: 'V tejto časti môžete meniť svoje základné údaje.',
  children: (
    <>
      <h4>Filtrovania</h4>
      <Input placeholder="Zadajte meno a priezvisko" label="Meno Priezvisko" />
    </>
  )
};
