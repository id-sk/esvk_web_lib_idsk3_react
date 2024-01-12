import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { InformationBanner } from '../../src/components/Molecules';
import '/src/styles/idsk3_theme.css';
import { TextButton } from '../../src/components';

export default {
  title: 'Molecules/InformationBanner',
  component: InformationBanner
} as ComponentMeta<typeof InformationBanner>;

const Template: ComponentStory<typeof InformationBanner> = (args) => (
  <InformationBanner {...args} />
);

export const Information = Template.bind({});
Information.args = {
  closeButtonLabel: 'Zatvoriť',
  ariaLabel: 'Oznam',
  title: 'Oznam',
  variant: 'information',
  children: (
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry <br />
      <a href="#" className="idsk-link-s">
        Viac informácií
      </a>
    </p>
  )
};

export const Warning = Template.bind({});
Warning.args = {
  title: 'Oznam',
  variant: 'warning',
  children: (
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry <br />
      <a href="#" className="idsk-link-s">
        Viac informácií
      </a>
    </p>
  )
};

export const Alert = Template.bind({});
Alert.args = {
  title: 'Oznam',
  variant: 'alert',
  children: (
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry <br />
      <a href="#" className="idsk-link-s">
        Viac informácií
      </a>
    </p>
  )
};

export const Success = Template.bind({});
Success.args = {
  title: 'Oznam',
  variant: 'success',
  children: (
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry <br />
      <a href="#" className="idsk-link-s">
        Viac informácií
      </a>
    </p>
  )
};

export const InformationActionButton = Template.bind({});
InformationActionButton.args = {
  title: 'Oznam',
  variant: 'information',
  children: (
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry <br />
      <a href="#" className="idsk-link-s">
        Viac informácií
      </a>
    </p>
  ),
  actionButton: <TextButton label="Action" />
};

export const WarningActionButton = Template.bind({});
WarningActionButton.args = {
  title: 'Oznam',
  variant: 'warning',
  children: (
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry <br />
      <a href="#" className="idsk-link-s">
        Viac informácií
      </a>
    </p>
  ),
  actionButton: <TextButton label="Action" />
};

export const AlertActionButton = Template.bind({});
AlertActionButton.args = {
  title: 'Oznam',
  variant: 'alert',
  children: (
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry <br />
      <a href="#" className="idsk-link-s">
        Viac informácií
      </a>
    </p>
  ),
  actionButton: <TextButton label="Action" />
};

export const SuccessActionButton = Template.bind({});
SuccessActionButton.args = {
  title: 'Oznam',
  variant: 'success',
  children: (
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry <br />
      <a href="#" className="idsk-link-s">
        Viac informácií
      </a>
    </p>
  ),
  actionButton: <TextButton label="Action" variant="success" />
};

export const Short = Template.bind({});
Short.args = {
  title: 'Oznam',
  variant: 'success',
  children: (
    <p>
      Krátky oznam <br />
    </p>
  ),
  actionButton: <TextButton label="Action" variant="success" />
};

export const WithoutTitle = Template.bind({});
WithoutTitle.args = {
  variant: 'alert',
  children: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
};

export const WithoutCloseButton = Template.bind({});
WithoutCloseButton.args = {
  title: 'Oznam',
  children: (
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry <br />
      <a href="#" className="idsk-link-s">
        Viac informácií
      </a>
    </p>
  ),
  hideCloseButton: true
};

export const WithoutIcon = Template.bind({});
WithoutIcon.args = {
  useDefaultIcon: false,
  title: 'Oznam',
  children: (
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry <br />
      <a href="#" className="idsk-link-s">
        Viac informácií
      </a>
    </p>
  ),
  hideCloseButton: true
};

export const InformationAnnouncementInformation = Template.bind({});
InformationAnnouncementInformation.args = {
  title: 'Oznam',
  variant: 'information',
  type: 'announcement',
  children: (
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry <br />
      <a href="#" className="idsk-link-s">
        Viac informácií
      </a>
    </p>
  )
};
export const WarningInformationAnnouncement = Template.bind({});
WarningInformationAnnouncement.args = {
  title: 'Oznam',
  variant: 'warning',
  type: 'announcement',
  children: (
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry <br />
      <a href="#" className="idsk-link-s">
        Viac informácií
      </a>
    </p>
  )
};
export const AlertInformationAnnouncement = Template.bind({});
AlertInformationAnnouncement.args = {
  title: 'Oznam',
  variant: 'alert',
  type: 'announcement',
  children: (
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry <br />
      <a href="#" className="idsk-link-s">
        Viac informácií
      </a>
    </p>
  )
};
export const InformationAnnouncementWithoutTitle = Template.bind({});
InformationAnnouncementWithoutTitle.args = {
  variant: 'information',
  type: 'announcement',
  children: (
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry <br />
      <a href="#" className="idsk-link-s">
        Viac informácií
      </a>
    </p>
  )
};
