import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ModalSideBar, ModalSideBarFooterButton } from '../components/Atoms';
import '/src/styles/idsk3_theme.css';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/ModalSideBar',
  component: ModalSideBar
} as ComponentMeta<typeof ModalSideBar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ModalSideBar> = (args) => (
  <ModalSideBar {...args}></ModalSideBar>
);

export const Default = Template.bind({});
Default.args = {
  opened: true,
  heading: 'Profil'
};

export const WithFooterButton = Template.bind({});
WithFooterButton.args = {
  opened: true,
  heading: 'Profil',
  footerButton: <ModalSideBarFooterButton href="#">Zobraziť všetko</ModalSideBarFooterButton>
};
