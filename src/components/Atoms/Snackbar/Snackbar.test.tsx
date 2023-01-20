import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import Snackbar from './Snackbar';

describe('Snackbar', () => {
  test('renders the Snackbar component', () => {
    render(<Snackbar open={true} message="Snackbar" />);
    expect(screen.getByText('Snackbar')).toBeDefined();
  });

  test('calls the onClose function', async () => {
    const onClose = jest.fn();
    const closeButton = screen.findByRole('button');

    render(<Snackbar open={true} message="Snackbar" closeButton={true} onClose={onClose} />);
    fireEvent.click(await closeButton);
    expect(onClose).toBeCalled();
  });

  test('calls the onActionCall function', async () => {
    const onActionCall = jest.fn();
    const actionButton = screen.findByText('ACTION');

    render(<Snackbar open={true} message="Snackbar" action="ACTION" onActionCall={onActionCall} />);

    fireEvent.click(await actionButton);
    expect(onActionCall).toBeCalled();
  });
});
