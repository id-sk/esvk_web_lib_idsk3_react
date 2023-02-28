import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Input } from '../../src/components/Atoms/Input/index';
import { PlaceholderIcon } from '../../src/svgIcons';
import '/src/styles/idsk3_theme.css';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Input',
  component: Input
} as ComponentMeta<typeof Input>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Placeholder'
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  placeholder: 'Placeholder',
  icon: <PlaceholderIcon />
};

export const WithIconAndAction = Template.bind({});
WithIconAndAction.args = {
  placeholder: 'Placeholder',
  icon: <PlaceholderIcon />,
  actionButton: {
    label: 'Action',
    onClick: () => {
      console.log('Action button clicked!');
    }
  }
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: 'This is label',
  placeholder: 'Placeholder'
};

export const WithCaption = Template.bind({});
WithCaption.args = {
  label: 'This is label',
  caption: 'This is caption',
  placeholder: 'Placeholder',
  errorMsg: 'This is error message'
};

export const WithSubtitle = Template.bind({});
WithSubtitle.args = {
  label: 'This is label',
  caption: 'This is caption',
  subtitle: 'This is very long subtitle',
  placeholder: 'Placeholder',
  errorMsg: 'This is error message'
};
export const Optional = Template.bind({});
Optional.args = {
  label: 'This is label',
  caption: 'This is caption',
  subtitle: 'This is very long subtitle',
  placeholder: 'Placeholder',
  errorMsg: 'This is error message',
  optionalText: '(nepovinné)'
};
export const Mandatory = Template.bind({});
Mandatory.args = {
  label: 'This is label',
  caption: 'This is caption',
  subtitle: 'This is very long subtitle',
  placeholder: 'Placeholder',
  errorMsg: 'This is error message',
  mandatory: true
};

export const ErrorMessage = Template.bind({});
ErrorMessage.args = {
  label: 'This is label',
  placeholder: 'Placeholder',
  error: true,
  errorMsg: 'This is error message'
};

export const DisabledErrorIcon = Template.bind({});
DisabledErrorIcon.args = {
  actionButton: {
    label: <PlaceholderIcon width={'20px'} height={'20px'} />,
    onClick: () => {
      console.log('Action button clicked!');
    }
  },
  label: 'This is label',
  placeholder: 'Placeholder',
  error: true,
  errorMsg: 'This is error message',
  disabledErrorIcon: true
};
