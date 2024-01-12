import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ModalSideBar } from '../../src/components/Atoms';
import '/src/styles/idsk3_theme.css';
import { PrimaryButton, SecondaryButton } from '../../src/components';
import { PlaceholderIcon } from '../../src/svgIcons';

export default {
  title: 'Atoms/ModalSideBar',
  component: ModalSideBar
} as ComponentMeta<typeof ModalSideBar>;

const Template: ComponentStory<typeof ModalSideBar> = (args) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <PrimaryButton label="Open sidebar" onClick={() => setOpen(true)} />
      <ModalSideBar {...args} opened={open} toggleOpened={setOpen} />
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  heading: 'Profil',
  closeButtonAriaLabel: 'Zavrieť'
};

export const WithFooterButtons = Template.bind({});
WithFooterButtons.args = {
  heading: 'Profil',
  closeButtonAriaLabel: 'Zavrieť',
  footer: (
    <>
      <PrimaryButton size="large" icon={<PlaceholderIcon />}>
        Action
      </PrimaryButton>
      <SecondaryButton size="large">Subaction</SecondaryButton>
    </>
  )
};

export const LongContent = Template.bind({});
LongContent.args = {
  heading: 'Profil',
  closeButtonAriaLabel: 'Zavrieť',
  footer: (
    <>
      <PrimaryButton size="large" icon={<PlaceholderIcon />}>
        Action
      </PrimaryButton>
      <SecondaryButton size="large">Subaction</SecondaryButton>
    </>
  ),
  children: (
    <>
      <div className="bg-neutral-90 h-20" />
      <div className="bg-neutral-100 h-20" />
      <div className="bg-neutral-90 h-20" />
      <div className="bg-neutral-100 h-20" />
      <div className="bg-neutral-90 h-20" />
      <div className="bg-neutral-100 h-20" />
      <div className="bg-neutral-90 h-20" />
      <div className="bg-neutral-100 h-20" />
      <div className="bg-neutral-90 h-20" />
      <div className="bg-neutral-100 h-20" />
      <div className="bg-neutral-90 h-20" />
      <div className="bg-neutral-100 h-20" />
      <div className="bg-neutral-90 h-20" />
      <div className="bg-neutral-100 h-20" />
    </>
  )
};
