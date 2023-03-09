import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import '/src/styles/idsk3_theme.css';
import {
  InPageNavigation,
  InPageNavigationList,
  InPageNavigationLink
} from '../../src/components/Molecules';
import classNames from 'classnames';
import { ArrowRightIcon } from '../../src/svgIcons';

export default {
  title: 'Molecules/InPageNavigation',
  component: InPageNavigation
} as ComponentMeta<typeof InPageNavigation>;

const Template: ComponentStory<typeof InPageNavigation> = (args) => {
  const [selectedLink, setSelectedLink] = useState<string | null>('subsection1');

  const handleClick = (e: React.MouseEvent, link: string) => {
    e.preventDefault();
    setSelectedLink(link);
  };

  return (
    <InPageNavigation {...args}>
      <InPageNavigationList>
        <InPageNavigationLink
          linkElement={
            <a
              href="#"
              className={classNames({ active: selectedLink === 'subsection1' })}
              onClick={(e) => handleClick(e, 'subsection1')}
            >
              <ArrowRightIcon />
              Subsection text
            </a>
          }
        />
        <InPageNavigationLink
          className={classNames({ active: selectedLink === 'subsection2' })}
          label="Subsection text"
          href="#"
          onClick={(e) => handleClick(e, 'subsection2')}
        />
        <InPageNavigationLink
          className={classNames({ active: selectedLink === 'subsection3' })}
          label="Subsection text"
          href="#"
          onClick={(e) => handleClick(e, 'subsection3')}
        />
      </InPageNavigationList>
    </InPageNavigation>
  );
};

const TemplateWithSubtitle: ComponentStory<typeof InPageNavigation> = (args) => {
  const [selectedLink, setSelectedLink] = useState<string | null>('subsection1');

  const handleClick = (e: React.MouseEvent, link: string) => {
    e.preventDefault();
    setSelectedLink(link);
  };

  return (
    <InPageNavigation {...args}>
      <InPageNavigationList>
        <InPageNavigationLink
          linkElement={
            <a
              href="#"
              className={classNames({ active: selectedLink === 'subsection1' })}
              onClick={(e) => handleClick(e, 'subsection1')}
            >
              <ArrowRightIcon />
              Subsection text
            </a>
          }
        />
        <InPageNavigationLink
          className={classNames({ active: selectedLink === 'subsection2' })}
          label="Subsection text"
          href="#"
          onClick={(e) => handleClick(e, 'subsection2')}
        />
        <InPageNavigationLink
          className={classNames({ active: selectedLink === 'subsection3' })}
          label="Subsection text"
          href="#"
          onClick={(e) => handleClick(e, 'subsection3')}
        />
      </InPageNavigationList>
      <InPageNavigationList subtitle="Subtitle">
        <InPageNavigationLink
          linkElement={
            <a
              href="#"
              className={classNames({ active: selectedLink === 'subsection4' })}
              onClick={(e) => handleClick(e, 'subsection4')}
            >
              <ArrowRightIcon />
              Subsection text
            </a>
          }
        />
        <InPageNavigationLink
          className={classNames({ active: selectedLink === 'subsection5' })}
          label="Subsection text"
          href="#"
          onClick={(e) => handleClick(e, 'subsection5')}
        />
        <InPageNavigationLink
          className={classNames({ active: selectedLink === 'subsection6' })}
          label="Subsection text"
          href="#"
          onClick={(e) => handleClick(e, 'subsection6')}
        />
      </InPageNavigationList>
    </InPageNavigation>
  );
};

export const Default = Template.bind({});
Default.args = {
  title: 'Title'
};

export const WithSubtitle = TemplateWithSubtitle.bind({});
WithSubtitle.args = {
  title: 'Title'
};
