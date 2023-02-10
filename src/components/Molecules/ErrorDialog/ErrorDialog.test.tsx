import React from 'react';
import { render, screen } from '@testing-library/react';
import ErrorDialog from './index';

describe('ErrorDialog', () => {
  test('renders children', () => {
    render(
      <ErrorDialog title="Title simple" opened={true} isLoading={false}>
        Test
      </ErrorDialog>
    );
    expect(screen.getByText('Test')).toBeDefined();
  });
  test('renders title', () => {
    render(
      <ErrorDialog title="Title simple" opened={true} isLoading={false}>
        Test
      </ErrorDialog>
    );
    expect(screen.getByText('Title simple')).toBeDefined();
  });
  test('renders subtitle', () => {
    render(
      <ErrorDialog subtitle="Subtitle" opened={true} isLoading={false}>
        Test
      </ErrorDialog>
    );
    expect(screen.getByText('Subtitle')).toBeDefined();
  });
});
