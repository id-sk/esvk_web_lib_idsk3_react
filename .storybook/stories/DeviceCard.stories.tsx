import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { DeviceCard } from '../../src/components/Molecules';
import { PhoneAndroidIcon } from '../../src/svgIcons/Hardware';
import '/src/styles/idsk3_theme.css';
import { PrimaryButton } from '../../src/components';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Molecules/DeviceCard',
  component: DeviceCard
} as ComponentMeta<typeof DeviceCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof DeviceCard> = (args) => <DeviceCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  icon: <PhoneAndroidIcon />,
  title: 'Martinov iPhone 12',
  button: <PrimaryButton variant="warning">Deaktivovať</PrimaryButton>,
  deviceData: [
    {
      label: 'Device ID:',
      description: '29JE938H0209H002'
    },
    {
      label: 'Typ zariadenia:',
      description: 'Mobile - Apple iPhone 12 pro max'
    },
    {
      label: 'Aktívne od:',
      description: '1.6.2021 / 14:32'
    },
    {
      label: 'Posledná aktivita:',
      description: '9.11.2021 / 07:11'
    }
  ]
};
