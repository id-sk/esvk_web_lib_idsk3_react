import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { UserCard } from '../components/Molecules';
import '/src/styles/idsk3_theme.css';
import { TextButton } from '../components';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Molecules/UserCard',
  component: UserCard
} as ComponentMeta<typeof UserCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof UserCard> = (args) => <UserCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Používateľ:',
  name: 'Martin Mucha',
  button: <TextButton>Zmeniť používateľa</TextButton>,
  children: (
    <span>
      Číslo OP: <strong>FE882K</strong>
    </span>
  )
};
