import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ErrorDialog } from '../components/Molecules';
import '/src/styles/idsk3_theme.css';
import { PrimaryButton, SecondaryButton } from '../components';

export default {
  title: 'Molecules/ErrorDialog',
  component: ErrorDialog
} as ComponentMeta<typeof ErrorDialog>;

const Template: ComponentStory<typeof ErrorDialog> = (args) => {
  const [opened, setOpened] = React.useState(true);
  return (
    <ErrorDialog {...args} opened={opened}>
      {args.children}
      <SecondaryButton fullWidth size="large" type="button" onClick={() => setOpened(false)}>
        Close
      </SecondaryButton>
    </ErrorDialog>
  );
};

export const Default = Template.bind({});
Default.args = {
  title: 'This is the title',
  subtitle: 'Subtitle Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis dicta atque.',
  children: (
    <PrimaryButton fullWidth size="large" type="button" variant="warning" onClick={() => {}}>
      Action
    </PrimaryButton>
  )
};
export const WithoutButton = Template.bind({});
WithoutButton.args = {
  title: 'This is the title',
  subtitle: 'Subtitle Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis dicta atque.'
};
export const WithoutTitle = Template.bind({});
WithoutTitle.args = {
  subtitle: 'Subtitle Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis dicta atque.',
  children: (
    <PrimaryButton fullWidth size="large" type="button" variant="warning" onClick={() => {}}>
      Action
    </PrimaryButton>
  )
};
export const WithoutSubtitle = Template.bind({});
WithoutSubtitle.args = {
  title: 'Title Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis dicta atque',
  children: (
    <PrimaryButton fullWidth size="large" type="button" variant="warning" onClick={() => {}}>
      Action
    </PrimaryButton>
  )
};
