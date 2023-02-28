import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AvatarCircle } from '../../src/components/Atoms';
import '/src/styles/idsk3_theme.css';
import { IdentificationCard, PrimaryButton, TextButton } from '../../src/components';
import { CompareArrowsIcon } from '../../src/svgIcons/Actions';

export default {
  title: 'Molecules/IdentificationCard',
  component: IdentificationCard
} as ComponentMeta<typeof AvatarCircle>;

const Template: ComponentStory<typeof IdentificationCard> = (args) => (
  <IdentificationCard {...args} />
);

export const Default = Template.bind({});
Default.args = {
  firstName: 'Martin',
  lastName: 'Mucha',
  fullName: 'Ing. Martin Mucha',
  identification: 'RČ 928374/3294',
  children: (
    <>
      <PrimaryButton
        size="large"
        label="Zmeniť zastupovanie"
        className="w-full mb-3"
        icon={<CompareArrowsIcon />}
      />
      <TextButton size="large" variant="warning" label="Odhlásiť sa" className="w-full text-lg" />
    </>
  )
};
