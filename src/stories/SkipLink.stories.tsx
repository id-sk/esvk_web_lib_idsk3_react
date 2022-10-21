import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SkipLink } from '../components/Molecules';
import '/src/styles/idsk3_theme.css';

export default {
  title: 'Molecules/SkipLink',
  component: SkipLink
} as ComponentMeta<typeof SkipLink>;

const Template: ComponentStory<typeof SkipLink> = (args) => (
  <>
    <p>Pre zobrazenie komponentu stlačte tabulátor</p>
    <SkipLink {...args} />
  </>
);

export const Default = Template.bind({});
Default.args = {
  href: '#',
  children: 'Preskočiť na obsah'
};
