import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { InformationBanner } from '../components/Molecules';
import '/src/styles/idsk3_theme.css';
import { InfoIcon, CheckCircleIcon } from '../svgIcons/Actions';
import { WarningIcon } from '../svgIcons/Alert';
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
      Lorem Ipsum is simply dummy text of the printing and typesetting industry <br />
      <a href="#" className="link-s">
        Viac informácií
      </a>
    </p>
  )
};

export const Warning = Template.bind({});
Warning.args = {
  icon: <WarningIcon />,
  title: 'Oznam',
  variant: 'warning',
  children: (
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry <br />
      <a href="#" className="link-s">
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
      Lorem Ipsum is simply dummy text of the printing and typesetting industry <br />
      <a href="#" className="link-s">
        Viac informácií
      </a>
    </p>
  )
};

export const Success = Template.bind({});
Success.args = {
  icon: <CheckCircleIcon />,
  title: 'Oznam',
  variant: 'success',
  children: (
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry <br />
      <a href="#" className="link-s">
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
      Lorem Ipsum is simply dummy text of the printing and typesetting industry <br />
      <a href="#" className="link-s">
        Viac informácií
      </a>
    </p>
  ),
  actionButton: <TextButton label="Action" />
};

export const WarningActionButton = Template.bind({});
WarningActionButton.args = {
  icon: <WarningIcon />,
  title: 'Oznam',
  variant: 'warning',
  children: (
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry <br />
      <a href="#" className="link-s">
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
      Lorem Ipsum is simply dummy text of the printing and typesetting industry <br />
      <a href="#" className="link-s">
        Viac informácií
      </a>
    </p>
  ),
  actionButton: <TextButton label="Action" />
};

export const SuccessActionButton = Template.bind({});
SuccessActionButton.args = {
  icon: <CheckCircleIcon />,
  title: 'Oznam',
  variant: 'success',
  children: (
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry <br />
      <a href="#" className="link-s">
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
export const InformationAnnouncementInformation = Template.bind({});
InformationAnnouncementInformation.args = {
  icon: <InfoIcon />,
  title: 'Oznam',
  variant: 'information',
  type: 'announcement',
  children: (
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry <br />
      <a href="#" className="link-s">
        Viac informácií
      </a>
    </p>
  )
};
export const WarningInformationAnnouncement = Template.bind({});
WarningInformationAnnouncement.args = {
  icon: <WarningIcon />,
  title: 'Oznam',
  variant: 'warning',
  type: 'announcement',
  children: (
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry <br />
      <a href="#" className="link-s">
        Viac informácií
      </a>
    </p>
  )
};
export const AlertInformationAnnouncement = Template.bind({});
AlertInformationAnnouncement.args = {
  icon: <InfoIcon />,
  title: 'Oznam',
  variant: 'alert',
  type: 'announcement',
  children: (
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry <br />
      <a href="#" className="link-s">
        Viac informácií
      </a>
    </p>
  )
};
export const InformationAnnouncementWithoutTitle = Template.bind({});
InformationAnnouncementWithoutTitle.args = {
  icon: <InfoIcon />,
  variant: 'information',
  type: 'announcement',
  children: (
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry <br />
      <a href="#" className="link-s">
        Viac informácií
      </a>
    </p>
  )
};
