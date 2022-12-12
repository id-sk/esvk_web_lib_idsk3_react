import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PageLayout } from '../components/Templates';
import '/src/styles/idsk3_theme.css';

import {
  EventCard,
  InformationBanner,
  Navigation,
  SecondaryNavigation
} from '../components/Molecules';
import {
  AvatarCircle,
  Breadcrumbs,
  CardsContainer,
  HeaderContainer,
  IconLink,
  MenuButton,
  ModalSideBar,
  NotificationIcon,
  FooterContainerSection,
  FooterContainerSectionHeading
} from '../components/Atoms';
import {
  NavigationLink,
  NavigationLinkOption,
  FooterContainer,
  PrimaryButton,
  Logo
} from '../components';
import { LogoImage } from '../svgImages/Logos';
import { InfoIcon } from '../svgIcons/Actions';

export default {
  title: 'Templates/PageLayout',
  component: PageLayout,
  parameters: {
    layout: 'fullscreen'
  }
} as ComponentMeta<typeof PageLayout>;

const informationBanner = (
  <InformationBanner icon={<InfoIcon />} title="Oznam" variant="warning" type="announcement">
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry
      <a href="#" className="link-s block">
        Viac informácií
      </a>
    </p>
  </InformationBanner>
);

const breadcrumbs = (
  <Breadcrumbs>
    <a>Kalendár povinností</a>
  </Breadcrumbs>
);

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
  return (
    <>
      <Navigation>
        <NavigationContent />
      </Navigation>
      <div className="flex-auto" />
      <NotificationIcon alert={true} width="1.25rem" height="1.25rem" />
      <IconLink
        children={<InfoIcon width="1.25rem" height="1.25rem" />}
        className="mr-3"
        href="#"
      />
      <AvatarCircle firstName="Janko" lastName="Hraško" />
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
            heading="Oficiálna stránka"
            headingButton="verejnej správy"
            dropDownTitle="slovenčina"
            dropDownOptions={[<a href="/">english</a>]}
          >
            <div className="grid grid-cols-1 gap-4 tb2:grid-cols-2 tb2:gap-8">
              <div>
                <h3 className="text-body-1">Doména gov.sk je oficiálna</h3>
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
        logo={
          <a href="/">
            <Logo
              image={<LogoImage />}
              title={'Slovensko.sk'}
              subtitle={'Ústredný portál verejnej správy'}
              shortSubtitle={'ÚPVS'}
            />
          </a>
        }
      >
        <div className="hidden dm1:flex flex-auto items-center h-full text-blue-600">
          <ChildrenPrivate />
        </div>
        <div className="flex-auto dm1:hidden" />
        <MenuButton
          openedTitle="Zavrieť"
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
        footer={<PrimaryButton onClick={() => setSideBarOpened(false)}>Test Button</PrimaryButton>}
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
  <FooterContainer
    children={
      <div className="grid grid-cols-1 tb1:grid-cols-2 tb2:grid-cols-[auto_auto_1fr] gap-12 dm1:gap-24">
        <div className="grid grid-cols-1 dm1:grid-cols-[auto_auto] dm1:gap-24">
          <FooterContainerSection>
            <FooterContainerSectionHeading>Informácie</FooterContainerSectionHeading>
            <a>Informácie a návody</a>
            <a>Pre občanov</a>
            <a>Informácie a návody</a>
            <a>Pre občanov</a>
          </FooterContainerSection>
          <FooterContainerSection>
            <FooterContainerSectionHeading className="hidden dm1:block">
              &nbsp;
            </FooterContainerSectionHeading>
            <a>Pre občanov</a>
            <a>Metodické usmernenia</a>
            <a>Pre občanov</a>
            <a>Pre občanov</a>
          </FooterContainerSection>
        </div>

        <FooterContainerSection>
          <FooterContainerSectionHeading>Rýchle odkazy</FooterContainerSectionHeading>
          <a>Pre občanov</a>
          <a>Elektronická úradná tabuľa (CUET)</a>
          <a>Pre občanov</a>
          <a>eKolok</a>
        </FooterContainerSection>
        <FooterContainerSection className="tb2:text-right">
          <FooterContainerSectionHeading>Podpora</FooterContainerSectionHeading>
          <a>Často kladené otázky</a>
          <a>Pre občanov</a>
          <a>Pre občanov</a>
          <a>Facebook stránka</a>
        </FooterContainerSection>
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

const Template: ComponentStory<typeof PageLayout> = (args) => (
  <PageLayout {...args}>
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
  </PageLayout>
);

export const Default = Template.bind({});
Default.args = {
  heading: titleSection,
  header: <Header />,
  footer: pageFooter,
  informationBanner: informationBanner,
  breadcrumbs: breadcrumbs
};

export const HeadingButton = Template.bind({});
HeadingButton.args = {
  heading: (
    <div className="flex justify-between">
      {titleSection} <PrimaryButton>Pridať do kalendára</PrimaryButton>
    </div>
  ),
  header: <Header />,
  footer: pageFooter,
  breadcrumbs: breadcrumbs
};
