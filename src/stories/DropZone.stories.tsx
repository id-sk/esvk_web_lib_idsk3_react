import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { DropZone } from '../components/Molecules';
import '/src/styles/idsk3_theme.css';
export default {
  title: 'Molecules/DropZone',
  component: DropZone
} as ComponentMeta<typeof DropZone>;

const Template: ComponentStory<typeof DropZone> = (args) => <DropZone {...args} />;

export const Default = Template.bind({});
Default.args = {
  dropzoneTitle: 'Nahraj súbor',
  subtitle: 'Zvoľte súbor a nahrajte ho',
  description: 'alebo preneste zvolenú prílohu (max. veľkosť 50MB)',
  buttonText: 'Pridať prílohu',
  filesTitle: 'Nahrané súbory',
  errorMessage: 'Vyskytol sa problém pri nahrávaní',
  percent: '50%',
  maxSize: 50000000,
  progressEmptyColor: '#E0E0E0'
};
export const WithProgressBar = Template.bind({});
WithProgressBar.args = {
  dropzoneTitle: 'Nahraj súbor',
  subtitle: 'Zvoľte súbor a nahrajte ho',
  description: 'alebo preneste zvolenú prílohu (max. veľkosť 50MB)',
  buttonText: 'Pridať prílohu',
  filesTitle: 'Nahrané súbory',
  errorMessage: 'Vyskytol sa problém pri nahrávaní',
  percent: '50%',
  progress: true,
  maxSize: 50000000,
  progressEmptyColor: '#E0E0E0'
};
export const Inactive = Template.bind({});
Inactive.args = {
  dropzoneTitle: 'Nahraj súbor',
  subtitle: 'Zvoľte súbor a nahrajte ho',
  description: 'alebo preneste zvolenú prílohu (max. veľkosť 50MB)',
  buttonText: 'Pridať prílohu',
  variant: 'inactive'
};
