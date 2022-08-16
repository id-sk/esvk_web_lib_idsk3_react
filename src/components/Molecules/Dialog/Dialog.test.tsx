import React from 'react';
import { render, screen } from '@testing-library/react';
import Dialog from './index';
import { PrimaryButton, SecondaryButton } from '../../Atoms';

describe('Dialog', () => {
  test('renders children', () => {
    render(
      <Dialog
        title="Title simple"
        opened={true}
        toggleOpened={() => {}}
        primaryButton={<PrimaryButton>Text Button</PrimaryButton>}
      >
        Test
      </Dialog>
    );
    expect(screen.getByText('Test')).toBeDefined();
  });
  test('renders title', () => {
    render(
      <Dialog
        title="Title simple"
        opened={true}
        toggleOpened={() => {}}
        primaryButton={<PrimaryButton>Text Button</PrimaryButton>}
      >
        Test
      </Dialog>
    );
    expect(screen.getByText('Title simple')).toBeDefined();
  });
  test('renders second button', () => {
    render(
      <Dialog
        title="Title simple"
        opened={true}
        toggleOpened={() => {}}
        primaryButton={<PrimaryButton>Text Button</PrimaryButton>}
        secondaryButton={<SecondaryButton>Text</SecondaryButton>}
      >
        Test
      </Dialog>
    );
    expect(screen.getByText('Text')).toBeDefined();
  });
});
