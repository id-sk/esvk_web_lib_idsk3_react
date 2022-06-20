import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Breadcrumbs from './Breadcrumbs';

describe('Breadcrumbs', () => {
  test('renders home element correctly', () => {
    render(
      <Breadcrumbs homeLink={<a href="/home">Home test</a>}>
        <a href="testHref1">Test Option 1</a>
      </Breadcrumbs>
    );
    expect(screen.getByText('Home test').getAttribute('href')).toEqual('/home');
  });
  test('renders child element correctly', () => {
    render(
      <Breadcrumbs homeLink={<a href="/home">Home test</a>}>
        <a href="testHref1">Test Option 1</a>
      </Breadcrumbs>
    );
    expect(screen.getByText('Test Option 1').getAttribute('href')).toEqual('testHref1');
  });
});
