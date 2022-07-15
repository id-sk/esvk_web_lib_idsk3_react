import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MenuButton } from '../components/Atoms';
import '/src/styles/idsk3_theme.css';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/MenuButton',
  component: MenuButton
} as ComponentMeta<typeof MenuButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof MenuButton> = (args) => <MenuButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  opened: false,
  toggleOpened: () => {},
  openedTitle: 'Zavrieť',
  closedTitle: 'Menu'
};
