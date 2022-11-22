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
export const LongContent = Template.bind({});
LongContent.args = {
  children: (
    <div>
      <h3 className="mt-5">Lorem ipsum</h3>
      <p className="text-body">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, iure ab quasi perspiciatis
        consequuntur suscipit illum nulla voluptates assumenda id ipsum quibusdam possimus vero!
        Esse accusamus doloribus omnis quasi rem.
      </p>
      <h3 className="mt-5">Lorem ipsum</h3>
      <p className="text-body">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, iure ab quasi perspiciatis
        consequuntur suscipit illum nulla voluptates assumenda id ipsum quibusdam possimus vero!
        Esse accusamus doloribus omnis quasi rem.
      </p>
      <p className="text-body">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, iure ab quasi perspiciatis
        consequuntur suscipit illum nulla voluptates assumenda id ipsum quibusdam possimus vero!
        Esse accusamus doloribus omnis quasi rem.
      </p>

      <h3 className="mt-5">Lorem ipsum</h3>
      <p className="text-body">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, iure ab quasi perspiciatis
        consequuntur suscipit illum nulla voluptates assumenda id ipsum quibusdam possimus vero!
        Esse accusamus doloribus omnis quasi rem.
      </p>
      <h3 className="mt-5">Lorem ipsum</h3>
      <p className="text-body">
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
