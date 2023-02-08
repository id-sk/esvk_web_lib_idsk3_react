import React from 'react';
import { render, screen } from '@testing-library/react';
import ErrorDialog from './index';
import { PrimaryButton, SecondaryButton } from '../../Atoms';

describe('ErrorDialog', () => {
  test('renders children', () => {
    render(
      <ErrorDialog
        title="Title simple"
        opened={true}
        primaryButton={<PrimaryButton>Text Button</PrimaryButton>}
      >
        Test
      </ErrorDialog>
    );
    expect(screen.getByText('Test')).toBeDefined();
  });
  test('renders title', () => {
    render(
      <ErrorDialog
        title="Title simple"
        opened={true}
        primaryButton={<PrimaryButton>Text Button</PrimaryButton>}
      >
        Test
      </ErrorDialog>
    );
    expect(screen.getByText('Title simple')).toBeDefined();
  });
  test('renders second button', () => {
    render(
      <ErrorDialog
        title="Title simple"
        opened={true}
        primaryButton={<PrimaryButton>Text Button</PrimaryButton>}
        secondaryButton={<SecondaryButton>Text</SecondaryButton>}
      >
        Test
      </ErrorDialog>
    );
    expect(screen.getByText('Text')).toBeDefined();
  });
});
