import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {
  SecondaryNavigation,
  Navigation,
  NavigationLink,
  NavigationLinkOption,
  IdentificationCard
} from '../components/Molecules';
import {
  MenuButton,
  HeaderContainer,
  NotificationIcon,
  ModalSideBar,
  AvatarCircle,
  IconLink,
  PrimaryButton as Button,
  SearchBar,
  PrimaryButton,
  TextButton,
  Logo
} from '../components/Atoms';
import { LogoImage } from '../svgImages/Logos';
import { CompareArrowsIcon, InfoIcon } from '../svgIcons/Actions';
import '/src/styles/idsk3_theme.css';
import { MenuMobile } from '../components';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Molecules/HeaderContainer',
  component: HeaderContainer
} as ComponentMeta<typeof HeaderContainer>;

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
      <NavigationLink label="Ďalšie nástroje" id="dalsie-nastroje">
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

const ChildrenInnerNavigationLoggedIn = () => (
  <>
    <Navigation>
      <NavigationContent />
    </Navigation>
    <div className="flex-auto" />
    <NotificationIcon alert={true} width="1.25rem" height="1.25rem" />
    <IconLink href="#" children={<InfoIcon width="1.25rem" height="1.25rem" />} className="mr-3" />
    <AvatarCircle firstName="Janko" lastName="Hraško" />
  </>
);

const ChildrenNotLoggedIn = () => (
  <>
    <div className="flex-auto" />
    <div className="flex gap-4">
      <SearchBar placeholder="Vyhľadávať" searchbarSize="medium" />
      <Button children="Prihlásiť sa" />
    </div>
  </>
);

const ChildrenInnerNavigation = () => (
  <>
    <Navigation>
      <NavigationContent />
    </Navigation>
    <div className="flex-auto" />
    <Button children="Prihlásiť sa" />
  </>
);

const MenuMobileChildrenPublic = () => (
  <>
    <Navigation label="Menu">
      <NavigationContent />
    </Navigation>
    <Button children="Prihlásiť sa" className="w-full mt-4" />
  </>
);

const MenuMobileChildrenPrivate = () => (
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
);

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof HeaderContainer> = (args) => {
  const [mobileNavOpened, setMobileNavOpened] = useState<boolean>(false);
  const [sideBarOpened, setSideBarOpened] = useState<boolean>(false);

  const SecChildren = () => (
    <div className="grid grid-cols-1 gap-4 tb2:grid-cols-2 tb2:gap-8">
      <div>
        <h3 className="text-body-1">Doména gov.sk je oficiálna</h3>
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
            heading="Oficiálna stránka"
            headingButton="verejnej správy"
            mobileHeading="SK"
            mobileHeadingButton="e-Gov"
            dropDownTitle="slovenčina"
            dropDownOptions={[<a>english</a>]}
          >
            <SecChildren />
          </SecondaryNavigation>
        }
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
        className={mobileNavOpened ? 'header-container__wrapper--opened-mobile-menu' : ''}
        mobileMenu={
          <MenuMobile
            opened={mobileNavOpened}
            children={
              !!args.largeMenu ? <MenuMobileChildrenPublic /> : <MenuMobileChildrenPrivate />
            }
          />
        }
        fixed={true}
        focusLock={mobileNavOpened}
        {...args}
      >
        <SearchBar
          openable={true}
          containerClassName={!mobileNavOpened ? 'hidden' : 'dm1:hidden'}
          className="w-full max-w-96 pr-10"
          searchbarSize="medium"
          placeholder="Zadajte hľadaný výraz"
        />
        <div className="hidden dm1:flex flex-auto items-center h-full text-blue-600">
          {args.children}
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

export const InnerNavigation = Template.bind({});
InnerNavigation.args = {
  children: <ChildrenInnerNavigation />
};

export const BottomNavigation = Template.bind({});
BottomNavigation.args = {
  children: <ChildrenNotLoggedIn />,
  largeMenu: (
    <Navigation fullNav={true}>
      <NavigationContent />
    </Navigation>
  )
};

export const LoggedInNavigation = Template.bind({});
LoggedInNavigation.args = {
  children: <ChildrenInnerNavigationLoggedIn />
};
