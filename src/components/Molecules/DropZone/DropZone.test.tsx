import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';

import { default as DropZone, DropZoneAcceptedFile, DropZoneRejectedFile } from '../DropZone';

describe('DropZone', () => {
  test('title', () => {
    render(<DropZone dropzoneTitle="Title" />);
    expect(screen.getByText('Title')).toBeDefined();
  });
  test('button', () => {
    render(<DropZone buttonText="text" />);
    expect(screen.getByText('text')).toBeDefined();
  });
  test('accepted file children', () => {
    render(<DropZoneAcceptedFile>text</DropZoneAcceptedFile>);
    expect(screen.getByText('text')).toBeDefined();
  });
  test('rejected file children', () => {
    render(<DropZoneRejectedFile>text</DropZoneRejectedFile>);
    expect(screen.getByText('text')).toBeDefined();
  });
});
