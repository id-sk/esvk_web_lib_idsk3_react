import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SecondaryNavigation } from '../components/Molecules';
import { Navigation, MenuButton, HeaderContainer } from '../components/Atoms';
import { LogoPrivate } from '../components/Icons/Logos';
import '/src/styles/idsk3_theme.css';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/HeaderContainer',
  component: HeaderContainer
} as ComponentMeta<typeof HeaderContainer>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Template: ComponentStory<typeof HeaderContainer> = (args) => {
  const [currentHref, setCurrentHref] = useState<string | null>('kalendar');
  const [mobileNavOpened, setMobileNavOpened] = useState<boolean>(false);

  const handleClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    setCurrentHref(e.currentTarget.getAttribute('href'));
    e.stopPropagation();
    e.preventDefault();
    e.nativeEvent.stopImmediatePropagation();
    return false;
  };

  return (
    <HeaderContainer {...args}>
      <a href="/" className="inline-block h-[1.875rem] tb1:h-10">
        <LogoPrivate style={{ height: '100%', width: 'auto' }} />
      </a>
      <Navigation
        links={[
          { label: 'Správy', href: 'spravy', onClick: handleClick },
          { label: 'Kalendár', href: 'kalendar', onClick: handleClick },
          { label: 'Notifikácie', href: 'notifikacie', onClick: handleClick }
        ]}
        currentHref={currentHref}
        className="hidden dm1:flex"
      />
      <div className="flex-auto" />
      <MenuButton
        openedTitle="Zatvoriť"
        closedTitle="Menu"
        opened={mobileNavOpened}
        toggleOpened={() => setMobileNavOpened((p) => !p)}
        className="dm1:hidden"
      />
    </HeaderContainer>
  );
};

const SecChildren = () => (
  <div className="grid grid-cols-1 gap-4 tb2:grid-cols-2 tb2:gap-8">
    <div>
      <h3 className="text-body-1">Doména gov.sk je oficálna</h3>
      <p className="py-2.5">
        Toto je oficiálna webová stránka orgánu verejnej moci Slovenskej republiky. Oficiálne
        stránky využívajú najmä doménu gov.sk.{' '}
        <a
          href="https://www.slovensko.sk/sk/agendy/agenda/_organy-verejnej-moci"
          target="_blank"
          className="link-s text-white"
        >
          Odkazy na jednotlivé webové sídla orgánov verejnej moci nájdete na tomto odkaze.
        </a>
      </p>
    </div>
    <div>
      <h3 className="text-body-1">Táto stránka je zabezpečená</h3>
      <p className="py-2.5">
        Buďte pozorní a vždy sa uistite, že zdieľate informácie iba cez zabezpečenú webovú stránku
        verejnej správy SR. Zabezpečená stránka vždy začína https:// pred názvom domény webového
        sídla.
      </p>
    </div>
  </div>
);

Template.args = {
  fixed: false,
  secondaryNavigation: (
    <SecondaryNavigation
      title="Oficiálna stránka"
      titleButton="verejnej správy"
      dropDownTitle="slovenčina"
      dropDownOptions={[<a href="/">english</a>]}
    >
      <SecChildren />
    </SecondaryNavigation>
  )
};
