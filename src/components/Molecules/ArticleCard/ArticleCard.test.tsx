import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import ArticleCard from './ArticleCard';

describe('ArticleCard', () => {
  test('correctly parse date', () => {
    render(
      <ArticleCard
        date={1648641077221}
        heading="test title"
        dateFormatString="dd-MM-yyy"
        featuredImg={<div />}
      />
    );
    expect(screen.getByText('30-03-2022')).toBeDefined();
  });
  test('correctly parse tags', () => {
    render(
      <ArticleCard
        date={1648641077221}
        heading="test title"
        dateFormatString="dd-MM-yyy"
        featuredImg={<div />}
        tags={['Lorem ipsum tag', 'ipsum', 'consectetur']}
      />
    );
    expect(screen.getByText('Lorem ipsum tag')).toBeDefined();
  });
  test('layout', () => {
    render(
      <ArticleCard
        date={1648641077221}
        heading="test title"
        dateFormatString="dd-MM-yyy"
        featuredImg={<div />}
        tags={['Lorem', 'ipsum', 'consectetur']}
        layout="vertical"
      />
    );
    expect(screen.getByTestId('anchor-card')).toHaveClass('idsk-anchor-card--vertical');
  });
});
