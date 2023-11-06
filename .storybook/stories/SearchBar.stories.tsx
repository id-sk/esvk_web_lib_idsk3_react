import React, { RefObject } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SearchBar } from '../../src/components/Atoms';
import '/src/styles/idsk3_theme.css';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/SearchBar',
  component: SearchBar
} as ComponentMeta<typeof SearchBar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SearchBar> = (args) => <SearchBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Placeholder',
  searchbarSize: 'large'
};

export const ButtonLabel = Template.bind({});
ButtonLabel.args = {
  placeholder: 'Placeholder',
  buttonLabel: 'Search',
  searchbarSize: 'large'
};

export const Error = Template.bind({});
Error.args = {
  placeholder: 'Placeholder',
  buttonLabel: 'Search',
  searchbarSize: 'large',
  error: true,
  errorMsg: 'Nesprávny vstup'
};

export const WithSuggestions = Template.bind({});
WithSuggestions.args = {
  placeholder: 'Placeholder',
  buttonLabel: 'Search',
  searchbarSize: 'large',
  error: true,
  errorMsg: 'Nesprávny vstup',
  suggestions: ['suggestion 1', 'suggestion 2', 'suggestion 3'],
  suggestionOnClick: (suggestion: string) => {
    console.log(suggestion);
  }
};

const ref: RefObject<HTMLInputElement> = React.createRef();
export const WithCancelButton = Template.bind({});
WithCancelButton.args = {
  placeholder: 'Placeholder',
  searchbarSize: 'large',
  showCancelButton: true,
  onCancel: () => {
    console.log('Cancel button clicked');
  },
  ref: ref
};
