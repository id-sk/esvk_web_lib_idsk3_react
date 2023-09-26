import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Accordion, AccordionListGroup, Input } from '../../src/components/Atoms';
import { CheckCircleOutlineIcon } from "../../src/svgIcons";
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

const TemplateGroupSuccess: ComponentStory<typeof Accordion> = (args) => (
  <AccordionListGroup>
    <Accordion index={1} {...args} listItemVariant="success" />
    <Accordion {...args} />
    <Accordion index={2} {...args} listItemVariant="success" />
  </AccordionListGroup>
);

const TemplateGroupOnClick: ComponentStory<typeof Accordion> = (args) => (
  <AccordionListGroup>
    <Accordion index={1} {...args} listItemVariant="success" listItemIcon={<CheckCircleOutlineIcon />} />
    <Accordion {...args} />
    <Accordion index={2} {...args} />
  </AccordionListGroup>
);

const Template: ComponentStory<typeof Accordion> = (args) => <Accordion {...args} />;

const Heading = <h4 className="underline">Základné údaje</h4>;
const Subtitle = 'V tejto časti môžete meniť svoje základné údaje.'
const Content = (
  <>
    <h4>Filtrovania</h4>
    <Input placeholder="Zadajte meno a priezvisko" label="Meno Priezvisko" />
  </>
);

export const Default = Template.bind({});
Default.args = {
  heading: Heading,
  subTitle: Subtitle,
  children: Content
};
export const InitiallyOpen = Template.bind({});
InitiallyOpen.args = {
  heading: Heading,
  subTitle: Subtitle,
  initiallyClosed: false,
  children: Content
};
export const WithoutSubTitle = Template.bind({});
WithoutSubTitle.args = {
  heading: Heading,
  children: Content
};
export const Small = Template.bind({});
Small.args = {
  heading: Heading,
  subTitle: Subtitle,
  size: 'small',
  children: Content
};
export const SmallWithoutSubTitle = Template.bind({});
SmallWithoutSubTitle.args = {
  heading: Heading,
  size: 'small',
  children: Content
};
export const GrayBackground = Template.bind({});
GrayBackground.args = {
  heading: Heading,
  subTitle: Subtitle,
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
  heading: Heading,
  subTitle: Subtitle,
  children: Content
};
export const ListGroupSmall = TemplateGroup.bind({});
ListGroupSmall.args = {
  heading: Heading,
  subTitle: Subtitle,
  size: 'small',
  children: Content
};
export const ListGroupSuccess = TemplateGroupSuccess.bind({});
ListGroupSuccess.args = {
  heading: Heading,
  subTitle: Subtitle,
  size: 'small',
  children: Content
};
export const ListGroupOnClick = TemplateGroupOnClick.bind({});
ListGroupOnClick.args = {
  heading: Heading,
  subTitle: Subtitle,
  listItemButtonProps: {
    onClick: () => {
      console.log('button clicked!');
    }
  },
  size: 'small',
  children: Content
};
