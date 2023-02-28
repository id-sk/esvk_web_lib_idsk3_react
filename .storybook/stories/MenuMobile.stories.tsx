import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {
  Navigation,
  NavigationLink,
  NavigationLinkOption,
  MenuMobile
} from '../../src/components/Molecules';
import {
  MenuButton,
  PrimaryButton,
  PrimaryButton as Button,
  SearchBar,
  TextButton
} from '../../src/components/Atoms';
import '/src/styles/idsk3_theme.css';
import { IdentificationCard } from '../../src/components';
import { CompareArrowsIcon } from '../../src/svgIcons/Actions';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Molecules/MenuMobile',
  component: MenuMobile
} as ComponentMeta<typeof MenuMobile>;

const NavigationContent = () => {
  const [selectedLink, setSelectedLink] = useState<string | null>('kalendar');

  const isSelected = (link: string) => link === selectedLink;
  const handleClick = (e: React.MouseEvent, link: string) => {
    e.preventDefault();
    setSelectedLink(link);
  };

  return (
    <>
      <NavigationLink
        linkElement={
          <a href="#" onClick={(e) => handleClick(e, 'spravy')}>
            Správy
          </a>
        }
        alert={5}
        selected={isSelected('spravy')}
      />
      <NavigationLink
        label="Kalendár"
        href="#"
        selected={isSelected('kalendar')}
        onClick={(e) => handleClick(e, 'kalendar')}
      />
      <NavigationLink
        label="Notifikácie"
        href="#"
        selected={isSelected('notifikacie')}
        onClick={(e) => handleClick(e, 'notifikacie')}
      />
      <NavigationLink label="Ďalšie nástroje" id="dalsie-nastroje-mobile">
        <NavigationLinkOption
          label="Register rozhodnutí"
          href="#"
          onClick={(e) => e.preventDefault()}
        />
        <NavigationLinkOption label="eFaktúry" href="#" onClick={(e) => e.preventDefault()} />
      </NavigationLink>
    </>
  );
};

const Content = () => (
  <>
    <Navigation label="Menu">
      <NavigationContent />
    </Navigation>
    <Button children="Prihlásiť sa" className="w-full" />
  </>
);

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof MenuMobile> = (args) => (
  <MenuMobile {...args}>{args.children}</MenuMobile>
);

export const Default = Template.bind({});
Default.args = {
  opened: true,
  heading: 'Menu',
  children: <Content />
};

export const WithCustomHeading = Template.bind({});
WithCustomHeading.args = {
  opened: true,
  heading: (
    <>
      <SearchBar
        openable={true}
        className="w-full max-w-96 pr-10"
        searchbarSize="medium"
        placeholder="Zadajte hľadaný výraz"
      />
      <MenuButton
        openedTitle="Zavrieť"
        closedTitle="Menu"
        className="h-10 ml-3"
        opened={true}
        toggleOpened={() => {}}
      />
    </>
  ),
  children: <Content />
};

export const UserLoggedIn = Template.bind({});
UserLoggedIn.args = {
  opened: true,
  heading: (
    <>
      <SearchBar
        openable={true}
        className="w-full max-w-96 pr-10"
        searchbarSize="medium"
        placeholder="Zadajte hľadaný výraz"
      />
      <MenuButton
        openedTitle="Zavrieť"
        closedTitle="Menu"
        className="h-10 ml-3"
        opened={true}
        toggleOpened={() => {}}
      />
    </>
  ),
  children: (
    <>
      <IdentificationCard
        firstName="Martin"
        lastName="Mucha"
        fullName="Ing. Martin Mucha"
        identification="RČ 928374/3294"
        className="mb-[2.5em]"
      >
        <PrimaryButton
          size="large"
          label="Zmeniť zastupovanie"
          className="w-full mb-3"
          icon={<CompareArrowsIcon />}
        />
        <TextButton size="large" variant="warning" label="Odhlásiť sa" className="w-full text-lg" />
      </IdentificationCard>
      <Navigation label="Menu">
        <NavigationContent />
      </Navigation>
    </>
  )
};
