import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {
  SecondaryNavigation,
  Navigation,
  NavigationLink,
  NavigationLinkOption
} from '../components/Molecules';
import {
  MenuButton,
  HeaderContainer,
  NotificationIcon,
  ModalSideBar,
  AvatarCircle,
  IconLink
} from '../components/Atoms';
import { LogoPrivate } from '../svgImages/Logos';
import { InfoIcon } from '../svgIcons/Actions';
import '/src/styles/idsk3_theme.css';
import ModalSideBarFooterButton from '../components/Atoms/ModalSideBar/ModalSideBarFooterButton';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/HeaderContainer',
  component: HeaderContainer
} as ComponentMeta<typeof HeaderContainer>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Template: ComponentStory<typeof HeaderContainer> = () => {
  const [selectedLink, setSelectedLink] = useState<string | null>('kalendar');
  const [mobileNavOpened, setMobileNavOpened] = useState<boolean>(false);
  const [sideBarOpened, setSideBarOpened] = useState<boolean>(false);

  const isSelected = (link: string) => link === selectedLink;
  const handleClick = (e: React.MouseEvent, link: string) => {
    e.preventDefault();
    setSelectedLink(link);
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

  return (
    <>
      <HeaderContainer
        secondaryNavigation={
          <SecondaryNavigation
            title="Oficiálna stránka"
            titleButton="verejnej správy"
            dropDownTitle="slovenčina"
            dropDownOptions={[<a href="/">english</a>]}
          >
            <SecChildren />
          </SecondaryNavigation>
        }
        fixed={true}
      >
        <a href="/" className="inline-block h-[1.875rem] tb1:h-10">
          <LogoPrivate style={{ height: '100%', width: 'auto' }} />
        </a>
        <div className="hidden dm1:flex flex-auto items-center h-full text-blue-600">
          <Navigation>
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
            <NavigationLink label="Ďalšie nástroje">
              <NavigationLinkOption
                label="Register rozhodnutí"
                href="#"
                onClick={(e) => e.preventDefault()}
              />
              <NavigationLinkOption label="eFaktúry" href="#" onClick={(e) => e.preventDefault()} />
            </NavigationLink>
          </Navigation>
          <div className="flex-auto" />
          <NotificationIcon alert={true} width="1.25rem" height="1.25rem" />
          <IconLink children={<InfoIcon width="1.25rem" height="1.25rem" />} className="mr-3" />
          <AvatarCircle
            firstName="Janko"
            lastName="Hraško"
            onClick={() => setSideBarOpened(true)}
          />
        </div>
        <div className="flex-auto dm1:hidden" />
        <MenuButton
          openedTitle="Zatvoriť"
          closedTitle="Menu"
          opened={mobileNavOpened}
          toggleOpened={() => setMobileNavOpened((p) => !p)}
          className="dm1:hidden"
        />
      </HeaderContainer>
      <ModalSideBar
        opened={sideBarOpened}
        heading="Profil"
        toggleOpened={setSideBarOpened}
        footerButton={
          <ModalSideBarFooterButton onClick={() => setSideBarOpened(false)}>
            Test Button
          </ModalSideBarFooterButton>
        }
      >
        <div className="bg-neutral-90 h-20" />
        <div className="bg-neutral-100 h-20" />
        <div className="bg-neutral-90 h-20" />
        <div className="bg-neutral-100 h-20" />
        <div className="bg-neutral-90 h-20" />
        <div className="bg-neutral-100 h-20" />
        <div className="bg-neutral-90 h-20" />
        <div className="bg-neutral-100 h-20" />
        <div className="bg-neutral-90 h-20" />
        <div className="bg-neutral-100 h-20" />
        <div className="bg-neutral-90 h-20" />
        <div className="bg-neutral-100 h-20" />
        <div className="bg-neutral-90 h-20" />
        <div className="bg-neutral-100 h-20" />
      </ModalSideBar>
    </>
  );
};
