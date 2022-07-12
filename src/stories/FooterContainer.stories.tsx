import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {
  FooterContainer,
  FooterContainerSectionHeading,
  FooterContainerSection
} from '../components/Atoms';
import '/src/styles/idsk3_theme.css';

const logoFooter = require('./images/logo-footer.svg');

export default {
  title: 'Atoms/FooterContainer',
  component: FooterContainer,
  parameters: {
    layout: 'fullscreen'
  }
} as ComponentMeta<typeof FooterContainer>;

const Template: ComponentStory<typeof FooterContainer> = (args) => <FooterContainer {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: (
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
        <img src={logoFooter} alt="Footer Logo" />
      </div>
    </>
  )
};
