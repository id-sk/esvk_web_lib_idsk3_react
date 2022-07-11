import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PrivatePage } from '../components/Templates';
import '/src/styles/idsk3_theme.css';

import { EventCard, Navigation, SecondaryNavigation } from '../components/Molecules';
import {
  AvatarCircle,
  CardsContainer,
  HeaderContainer,
  IconLink,
  MenuButton,
  ModalSideBar,
  NotificationIcon,
  PublicFooterSection,
  PublicFooterSectionHeading
} from '../components/Atoms';
import { NavigationLink, NavigationLinkOption, PublicFooter } from '../components';
import { LogoPrivate } from '../svgImages/Logos';
import ModalSideBarFooterButton from '../components/Atoms/ModalSideBar/ModalSideBarFooterButton';
import { InfoIcon } from '../svgIcons/Actions';

export default {
  title: 'Templates/PrivatePage',
  component: PrivatePage,
  parameters: {
    layout: 'fullscreen'
  }
} as ComponentMeta<typeof PrivatePage>;

const titleSection = <h2>Kalendár povinností</h2>;

const eventCardProps = {
  color: '#126DFF',
  title: 'Daň z prijmov fyzických a právnických osôb za rok 2021',
  date: new Date().getTime(),
  children: (
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisc elit, sed do eiusmod tempor incid ut labore et
      dolore magna aliqua.
    </p>
  )
};

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
      <NavigationLink label="Ďalšie nástroje">
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

const ChildrenPrivate = () => {
  const [sideBarOpened, setSideBarOpened] = useState<boolean>(false);

  return (
    <>
      <Navigation>
        <NavigationContent />
      </Navigation>
      <div className="flex-auto" />
      <NotificationIcon alert={true} width="1.25rem" height="1.25rem" />
      <IconLink children={<InfoIcon width="1.25rem" height="1.25rem" />} className="mr-3" />
      <AvatarCircle firstName="Janko" lastName="Hraško" onClick={() => setSideBarOpened(true)} />
    </>
  );
};

const Header = () => {
  const [mobileNavOpened, setMobileNavOpened] = useState<boolean>(false);
  const [sideBarOpened, setSideBarOpened] = useState<boolean>(false);
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
            <div className="grid grid-cols-1 gap-4 tb2:grid-cols-2 tb2:gap-8">
              <div>
                <h3 className="text-body-1">Doména gov.sk je oficálna</h3>
                <p className="py-2.5">
                  Toto je oficiálna webová stránka orgánu verejnej moci Slovenskej republiky.
                  Oficiálne stránky využívajú najmä doménu gov.sk.{' '}
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
                  Buďte pozorní a vždy sa uistite, že zdieľate informácie iba cez zabezpečenú webovú
                  stránku verejnej správy SR. Zabezpečená stránka vždy začína https:// pred názvom
                  domény webového sídla.
                </p>
              </div>
            </div>
          </SecondaryNavigation>
        }
        fixed={true}
      >
        <a href="/" className="inline-block h-[1.875rem] tb1:h-10">
          <LogoPrivate style={{ height: '100%', width: 'auto' }} />
        </a>
        <div className="hidden dm1:flex flex-auto items-center h-full text-blue-600">
          <ChildrenPrivate />
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

const logoFooter = require('./images/logo-footer.svg');

const pageFooter = (
  <PublicFooter
    children={
      <div className="grid grid-cols-1 tb1:grid-cols-2 tb2:grid-cols-[auto_auto_1fr] gap-12 dm1:gap-24">
        <div className="grid grid-cols-1 dm1:grid-cols-[auto_auto] dm1:gap-24">
          <PublicFooterSection>
            <PublicFooterSectionHeading>Informácie</PublicFooterSectionHeading>
            <a>Informácie a návody</a>
            <a>Pre občanov</a>
            <a>Informácie a návody</a>
            <a>Pre občanov</a>
          </PublicFooterSection>
          <PublicFooterSection>
            <PublicFooterSectionHeading className="hidden dm1:block">
              &nbsp;
            </PublicFooterSectionHeading>
            <a>Pre občanov</a>
            <a>Metodické usmernenia</a>
            <a>Pre občanov</a>
            <a>Pre občanov</a>
          </PublicFooterSection>
        </div>

        <PublicFooterSection>
          <PublicFooterSectionHeading>Rýchle odkazy</PublicFooterSectionHeading>
          <a>Pre občanov</a>
          <a>Elektronická úradná tabuľa (CUET)</a>
          <a>Pre občanov</a>
          <a>eKolok</a>
        </PublicFooterSection>
        <PublicFooterSection className="tb2:text-right">
          <PublicFooterSectionHeading>Podpora</PublicFooterSectionHeading>
          <a>Často kladené otázky</a>
          <a>Pre občanov</a>
          <a>Pre občanov</a>
          <a>Facebook stránka</a>
        </PublicFooterSection>
      </div>
    }
    linksList={[
      <a>Mapa stránok</a>,
      <a>RSS</a>,
      <a>Ochrana osobných údajov</a>,
      <a>Základné zásady bezpečnosti</a>,
      <a>Nahlásenie podnetu / chyby</a>
    ]}
    bottomSection={
      <>
        <p>
          Prevádzkovateľom služby je Ministerstvo investícií,
          <br /> regionálneho rozvoja a informatizácie SR.
        </p>
        <div className="flex items-center pt-5 gap-8 flex-wrap">
          <p>
            Lorem ipsum dolor <a>Mauris finibus enim quis orci finibus imperdiet.</a>
          </p>
          <div className="flex-auto" />
          <img src={logoFooter} alt="Slovensko IT" />
        </div>
      </>
    }
  />
);

const Template: ComponentStory<typeof PrivatePage> = (args) => (
  <PrivatePage {...args}>
    <CardsContainer>
      <EventCard {...eventCardProps} />
      <EventCard {...eventCardProps} />
      <EventCard {...eventCardProps} />
      <EventCard {...eventCardProps} />
      <EventCard {...eventCardProps} />
      <EventCard {...eventCardProps} />
      <EventCard {...eventCardProps} />
      <EventCard {...eventCardProps} />
    </CardsContainer>
  </PrivatePage>
);

export const Default = Template.bind({});
Default.args = {
  titleSection,
  header: <Header />,
  footer: pageFooter
};
