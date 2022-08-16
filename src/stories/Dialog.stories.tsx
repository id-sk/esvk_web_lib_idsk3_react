import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Dialog } from '../components/Molecules';
import '/src/styles/idsk3_theme.css';
import { PrimaryButton } from '../components';

export default {
  title: 'Molecules/Dialog',
  component: Dialog
} as ComponentMeta<typeof Dialog>;

const Template: ComponentStory<typeof Dialog> = (args) => {
  const [opened, setOpened] = React.useState(true);
  return (
    <Dialog
      {...args}
      title="Title simple"
      opened={opened}
      toggleOpened={() => {
        setOpened(false);
      }}
      primaryButton={<PrimaryButton>Text Button</PrimaryButton>}
    ></Dialog>
  );
};
export const Default = Template.bind({});

export const WithDescription = Template.bind({});
WithDescription.args = {
  description: 'Description'
};
