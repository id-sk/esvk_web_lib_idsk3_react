import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Dialog } from '../../src/components/Molecules';
import '/src/styles/idsk3_theme.css';
import { PrimaryButton } from '../../src/components';

export default {
  title: 'Molecules/Dialog',
  component: Dialog
} as ComponentMeta<typeof Dialog>;

const Template: ComponentStory<typeof Dialog> = (args) => {
  const [opened, setOpened] = React.useState(true);
  return (
    <Dialog
      {...args}
      opened={opened}
      toggleOpened={() => {
        setOpened(false);
      }}
    ></Dialog>
  );
};
export const Default = Template.bind({});
Default.args = {
  title: 'Title simple',
  primaryButton: <PrimaryButton>Text Button</PrimaryButton>,
  closeButtonAriaLabel: 'Zavrieť'
};

export const WithDescription = Template.bind({});
WithDescription.args = {
  title: 'Title simple',
  description: 'Description',
  primaryButton: <PrimaryButton>Text Button</PrimaryButton>,
  closeButtonAriaLabel: 'Zavrieť'
};
export const LongContent = Template.bind({});
LongContent.args = {
  title: 'Title simple',
  primaryButton: <PrimaryButton>Text Button</PrimaryButton>,
  closeButtonAriaLabel: 'Zavrieť',
  children: (
    <div>
      <h3 className="mt-5">Lorem ipsum</h3>
      <p className="idsk-text-body">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, iure ab quasi perspiciatis
        consequuntur suscipit illum nulla voluptates assumenda id ipsum quibusdam possimus vero!
        Esse accusamus doloribus omnis quasi rem.
      </p>
      <h3 className="mt-5">Lorem ipsum</h3>
      <p className="idsk-text-body">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, iure ab quasi perspiciatis
        consequuntur suscipit illum nulla voluptates assumenda id ipsum quibusdam possimus vero!
        Esse accusamus doloribus omnis quasi rem.
      </p>
      <p className="idsk-text-body">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, iure ab quasi perspiciatis
        consequuntur suscipit illum nulla voluptates assumenda id ipsum quibusdam possimus vero!
        Esse accusamus doloribus omnis quasi rem.
      </p>

      <h3 className="mt-5">Lorem ipsum</h3>
      <p className="idsk-text-body">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, iure ab quasi perspiciatis
        consequuntur suscipit illum nulla voluptates assumenda id ipsum quibusdam possimus vero!
        Esse accusamus doloribus omnis quasi rem.
      </p>
      <h3 className="mt-5">Lorem ipsum</h3>
      <p className="idsk-text-body">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, iure ab quasi perspiciatis
        consequuntur suscipit illum nulla voluptates assumenda id ipsum quibusdam possimus vero!
        Esse accusamus doloribus omnis quasi rem. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Commodi, iure ab quasi perspiciatis consequuntur suscipit illum nulla voluptates
        assumenda id ipsum quibusdam possimus vero! Esse accusamus doloribus omnis quasi rem. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Commodi, iure ab quasi perspiciatis
        consequuntur suscipit illum nulla voluptates assumenda id ipsum quibusdam possimus vero!
        Esse accusamus doloribus omnis quasi rem.
      </p>
    </div>
  )
};

export const SimpleDialog = Template.bind({});
SimpleDialog.args = {
  children: (
    <div className="max-w-xs">
      <h3 className="mt-5">Lorem ipsum</h3>
      <p className="idsk-text-body">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, iure ab quasi perspiciatis
        consequuntur suscipit illum nulla voluptates assumenda id ipsum quibusdam possimus vero!
        Esse accusamus doloribus omnis quasi rem.
      </p>
      <PrimaryButton fullWidth={true} className="mt-5">
        Text Button
      </PrimaryButton>
    </div>
  )
};
