import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Footer, FooterSectionHeading, FooterSection } from '../components/Atoms';
import '/src/styles/idsk3_theme.css';

const logoFooter = require('./images/logo-footer.svg');

export default {
  title: 'Atoms/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen'
  }
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: (
    <div className="grid grid-cols-1 tb1:grid-cols-2 tb2:grid-cols-[auto_auto_1fr] gap-12 dm1:gap-24">
      <div className="grid grid-cols-1 dm1:grid-cols-[auto_auto] dm1:gap-24">
        <FooterSection>
          <FooterSectionHeading>Informácie</FooterSectionHeading>
          <a>Informácie a návody</a>
          <a>Pre občanov</a>
          <a>Informácie a návody</a>
          <a>Pre občanov</a>
        </FooterSection>
        <FooterSection>
          <FooterSectionHeading className="hidden dm1:block">&nbsp;</FooterSectionHeading>
          <a>Pre občanov</a>
          <a>Metodické usmernenia</a>
          <a>Pre občanov</a>
          <a>Pre občanov</a>
        </FooterSection>
      </div>

      <FooterSection>
        <FooterSectionHeading>Rýchle odkazy</FooterSectionHeading>
        <a>Pre občanov</a>
        <a>Elektronická úradná tabuľa (CUET)</a>
        <a>Pre občanov</a>
        <a>eKolok</a>
      </FooterSection>
      <FooterSection className="tb2:text-right">
        <FooterSectionHeading>Podpora</FooterSectionHeading>
        <a>Často kladené otázky</a>
        <a>Pre občanov</a>
        <a>Pre občanov</a>
        <a>Facebook stránka</a>
      </FooterSection>
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
