import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PrimaryButton } from '../../src/components';
import '/src/styles/idsk3_theme.css';
import { useState } from '@storybook/addons';
import { SnackbarStack } from '../../src/components/Atoms/Snackbar';

export default {
  title: 'Atoms/SnackbarStack',
  component: SnackbarStack
} as ComponentMeta<typeof SnackbarStack>;

const Template: ComponentStory<typeof SnackbarStack> = (args) => {
  const [snackbars, setSnackbars] = useState<any[]>([]);

  return (
    <>
      <PrimaryButton
        label="Add snackbar to stack"
        onClick={() => {
          setSnackbars((p) => [
            ...p,
            {
              message: `Snackbar in stack id: ${(Math.random() * 10).toFixed(2)}`,
              open: true,
              closeButton: true,
              variant: 'default',
              autoHideDuration: 3000
            }
          ]);
        }}
      />
      <SnackbarStack
        snackbars={snackbars}
        setSnackbars={setSnackbars}
        maxCount={args.maxCount}
        variant={args.variant}
      />
    </>
  );
};

export const Column = Template.bind({});
Column.args = {
  maxCount: 5,
  variant: 'column'
};

export const Stack = Template.bind({});
Stack.args = {
  variant: 'stack'
};
