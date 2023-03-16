import React from 'react';
import { addParameters } from '@storybook/react';
import { DocsPage, DocsContainer } from '@storybook/addon-docs';
import '../storybook_style.css';

// Import all the icons from the TypeScript file
import * as Icons from '../../src/svgIcons/index';

export default {
  title: 'Core/Icons',
  parameters: {
    docs: {
      page: DocsPage,
      container: DocsContainer
    }
  }
};

export const AllIcons = () => {
  return (
    <div className="icons-wrapper">
      {Object.entries(Icons).map(([name, IconComponent]) => {
        // Check if the IconComponent is defined before rendering it
        if (!IconComponent) {
          return null;
        }

        return (
          <div className="icon-preview" key={name}>
            <IconComponent />
            <div className="icon-preview__name">{name}</div>
          </div>
        );
      })}
    </div>
  );
};

addParameters({
  docs: {
    page: DocsPage,
    container: DocsContainer
  }
});
