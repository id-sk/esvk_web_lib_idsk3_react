import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PrimaryButton, Snackbar } from '../../src/components';
import '/src/styles/idsk3_theme.css';
import { useState } from '@storybook/addons';

export default {
  title: 'Atoms/Snackbar',
  component: Snackbar
} as ComponentMeta<typeof Snackbar>;

const Template: ComponentStory<typeof Snackbar> = (args) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleAction = () => {
    setOpen(false);
    console.log('Snackbar action called');
  };

  return (
    <>
      <PrimaryButton
        label="Open snackbar"
        onClick={() => {
          setOpen(true);
        }}
      />
      <Snackbar {...args} open={open} onClose={handleClose} onActionCall={handleAction} />
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  message: 'Default single line snackbar',
  autoHideDuration: 6000
};

export const Success = Template.bind({});
Success.args = {
  message: 'This action was performed successfully',
  variant: 'success'
};

export const Warning = Template.bind({});
Warning.args = {
  message: 'Warning! An error has occurred',
  variant: 'warning'
};

export const Info = Template.bind({});
Info.args = {
  message: 'This is important information',
  variant: 'info'
};

export const Attention = Template.bind({});
Attention.args = {
  message: 'This message requires yout attention',
  variant: 'attention'
};

export const WithAction = Template.bind({});
WithAction.args = {
  message: 'Single line snackbar with action',
  action: 'Back',
  closeButton: true
};

export const TwoLine = Template.bind({});
TwoLine.args = {
  message: 'Two line snackbar',
  secondLineMessage: 'without action button'
};

export const TwoLineWithAction = Template.bind({});
TwoLineWithAction.args = {
  message: 'Two line snackbar',
  secondLineMessage: 'with action button',
  action: 'Undo'
};

export const TwoLineWithLongAction = Template.bind({});
TwoLineWithLongAction.args = {
  message: 'Two line snackbar with longer',
  secondLineMessage: 'action button',
  action: 'Longer action',
  longAction: true
};
