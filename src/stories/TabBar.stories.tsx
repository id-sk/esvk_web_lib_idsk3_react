import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import '/src/styles/idsk3_theme.css';
import { TabBar, TabBarLink } from '../components/Atoms';

export default {
  title: 'Atoms/TabBar',
  component: TabBar
} as ComponentMeta<typeof TabBar>;

export const Template: ComponentStory<typeof TabBar> = (args) => {
  const [selectedLink, setSelectedLink] = useState<string | null>('ministerstva');

  const isSelected = (link: string) => link === selectedLink;
  const handleClick = (e: React.MouseEvent, link: string) => {
    e.preventDefault();
    setSelectedLink(link);
  };

  return (
    <div style={{ height: '100px' }}>
      <TabBar {...args}>
        <TabBarLink
          href="#"
          selected={isSelected('ministerstva')}
          onClick={(e) => handleClick(e, 'ministerstva')}
        >
          Ministerstvá
        </TabBarLink>
        <TabBarLink
          href="#"
          selected={isSelected('statna sprava')}
          onClick={(e) => handleClick(e, 'statna sprava')}
        >
          Štátna správa
        </TabBarLink>
        <TabBarLink
          href="#"
          selected={isSelected('samosprava')}
          onClick={(e) => handleClick(e, 'samosprava')}
        >
          Samospráva
        </TabBarLink>
      </TabBar>
    </div>
  );
};
