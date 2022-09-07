import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { InformationBanner } from '../components/Molecules';
import '/src/styles/idsk3_theme.css';
import { InfoIcon } from '../svgIcons/Actions';
import { TextButton } from '../components';

export default {
  title: 'Molecules/InformationBanner',
  component: InformationBanner
} as ComponentMeta<typeof InformationBanner>;

const Template: ComponentStory<typeof InformationBanner> = (args) => (
  <InformationBanner {...args} />
);

export const Information = Template.bind({});
Information.args = {
  icon: <InfoIcon />,
  title: 'Oznam',
  variant: 'information',
  children: (
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry
      <a href="#" className="link-s block">
        Viac informácií
      </a>
    </p>
  )
};

export const Warning = Template.bind({});
Warning.args = {
  icon: <InfoIcon />,
  title: 'Oznam',
  variant: 'warning',
  children: (
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry
      <a href="#" className="link-s block">
        Viac informácií
      </a>
    </p>
  )
};

export const Alert = Template.bind({});
Alert.args = {
  icon: <InfoIcon />,
  title: 'Oznam',
  variant: 'alert',
  children: (
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry
      <a href="#" className="link-s block">
        Viac informácií
      </a>
    </p>
  )
};

export const Success = Template.bind({});
Success.args = {
  icon: <InfoIcon />,
  title: 'Oznam',
  variant: 'success',
  children: (
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry
      <a href="#" className="link-s block">
        Viac informácií
      </a>
    </p>
  )
};

export const InformationActionButton = Template.bind({});
InformationActionButton.args = {
  icon: <InfoIcon />,
  title: 'Oznam',
  variant: 'information',
  children: (
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry
      <a href="#" className="link-s block">
        Viac informácií
      </a>
    </p>
  ),
  actionButton: <TextButton label="Action" />
};

export const WarningActionButton = Template.bind({});
WarningActionButton.args = {
  icon: <InfoIcon />,
  title: 'Oznam',
  variant: 'warning',
  children: (
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry
      <a href="#" className="link-s block">
        Viac informácií
      </a>
    </p>
  ),
  actionButton: <TextButton label="Action" />
};

export const AlertActionButton = Template.bind({});
AlertActionButton.args = {
  icon: <InfoIcon />,
  title: 'Oznam',
  variant: 'alert',
  children: (
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry
      <a href="#" className="link-s block">
        Viac informácií
      </a>
    </p>
  ),
  actionButton: <TextButton label="Action" />
};

export const SuccessActionButton = Template.bind({});
SuccessActionButton.args = {
  icon: <InfoIcon />,
  title: 'Oznam',
  variant: 'success',
  children: (
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry
      <a href="#" className="link-s block">
        Viac informácií
      </a>
    </p>
  ),
  actionButton: <TextButton label="Action" variant="success" />
};

export const WithoutTitle = Template.bind({});
WithoutTitle.args = {
  icon: <InfoIcon />,
  variant: 'alert',
  children: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
};
