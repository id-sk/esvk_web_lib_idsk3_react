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
    <ErrorDialog
      {...args}
      title="Naozaj si želáte deaktivovať zariadenie „Martin's iPhone 12?“{' '}"
      opened={opened}
      primaryButton={
        <PrimaryButton
          variant="warning"
          size="large"
          className="error-dialog__button"
          onClick={() => {
            setOpened(false);
          }}
        >
          Deaktivovať
        </PrimaryButton>
      }
      secondaryButton={
        <SecondaryButton
          size="large"
          className="error-dialog__button"
          onClick={() => {
            setOpened(false);
          }}
        >
          Zatvoriť
        </SecondaryButton>
      }
    >
      Po potvrdení bude vybrané zariadenie nenávratne vymazané.
    </ErrorDialog>
  );
};
export const Default = Template.bind({});
