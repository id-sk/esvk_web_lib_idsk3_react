import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PublicFooter, PublicFooterSectionHeading, PublicFooterSection } from '../components/Atoms';
import '/src/styles/idsk3_theme.css';

const logoFooter = require('./images/logo-footer.svg');

export default {
  title: 'Atoms/PublicFooter',
  component: PublicFooter,
  parameters: {
    layout: 'fullscreen'
  }
} as ComponentMeta<typeof PublicFooter>;

const Template: ComponentStory<typeof PublicFooter> = (args) => <PublicFooter {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: (
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
  ),
  linksList: [
    <a>Mapa stránok</a>,
    <a>RSS</a>,
    <a>Ochrana osobných údajov</a>,
    <a>Základné zásady bezpečnosti</a>,
    <a>Nahlásenie podnetu / chyby</a>
  ],
  bottomSection: (
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
        <img src={logoFooter} />
      </div>
    </>
  )
};
