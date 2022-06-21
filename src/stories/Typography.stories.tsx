import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PrivatePage } from '../components/Templates';
import '/src/styles/idsk3_theme.css';

export default {
  title: 'Core/Typography',
  component: PrivatePage,
  parameters: {
    layout: 'fullscreen'
  }
} as ComponentMeta<typeof PrivatePage>;

const sampleText = `Dve staršie hneď vedeli, čo si majú vybrať, a kázali si doniesť: tá drahé šaty, tá zlaté
      prstene, ale také, akým by tu doma páru nebolo. Iba najmladšia, vždy tichá a krotká ako
      ovečka, tá aj teraz mlčala.`;

const Headline1Template: ComponentStory<typeof PrivatePage> = (args) => (
  <PrivatePage {...args}>
    <h1>{sampleText}</h1>
  </PrivatePage>
);

export const Headline1 = Headline1Template.bind({});

const Headline2Template: ComponentStory<typeof PrivatePage> = (args) => (
  <PrivatePage {...args}>
    <h2>{sampleText}</h2>
  </PrivatePage>
);

export const Headline2 = Headline2Template.bind({});

const Headline3Template: ComponentStory<typeof PrivatePage> = (args) => (
  <PrivatePage {...args}>
    <h3>{sampleText}</h3>
  </PrivatePage>
);

export const Headline3 = Headline3Template.bind({});

const Headline4Template: ComponentStory<typeof PrivatePage> = (args) => (
  <PrivatePage {...args}>
    <h4>{sampleText}</h4>
  </PrivatePage>
);

export const Headline4 = Headline4Template.bind({});

const SubtitleTemplate: ComponentStory<typeof PrivatePage> = (args) => (
  <PrivatePage {...args}>
    <p className="subtitle">{sampleText}</p>
  </PrivatePage>
);

export const Subtitle = SubtitleTemplate.bind({});

const SubtitleBoldTemplate: ComponentStory<typeof PrivatePage> = (args) => (
  <PrivatePage {...args}>
    <p className="subtitle font-bold">{sampleText}</p>
  </PrivatePage>
);

export const SubtitleBold = SubtitleBoldTemplate.bind({});

const BodyTemplate: ComponentStory<typeof PrivatePage> = (args) => (
  <PrivatePage {...args}>
    <p className="text-body">{sampleText}</p>
  </PrivatePage>
);

export const Body = BodyTemplate.bind({});

const BodyBoldTemplate: ComponentStory<typeof PrivatePage> = (args) => (
  <PrivatePage {...args}>
    <p className="text-body font-bold">{sampleText}</p>
  </PrivatePage>
);

export const BodyBold = BodyBoldTemplate.bind({});

const Body1Template: ComponentStory<typeof PrivatePage> = (args) => (
  <PrivatePage {...args}>
    <p className="text-body-1">{sampleText}</p>
  </PrivatePage>
);

export const Body1 = Body1Template.bind({});

const Body1BoldTemplate: ComponentStory<typeof PrivatePage> = (args) => (
  <PrivatePage {...args}>
    <p className="text-body-1 font-bold">{sampleText}</p>
  </PrivatePage>
);

export const Body1Bold = Body1BoldTemplate.bind({});

const CaptionTemplate: ComponentStory<typeof PrivatePage> = (args) => (
  <PrivatePage {...args}>
    <span className="caption">{sampleText}</span>
  </PrivatePage>
);

export const Caption = CaptionTemplate.bind({});

const CaptionBoldTemplate: ComponentStory<typeof PrivatePage> = (args) => (
  <PrivatePage {...args}>
    <span className="caption font-bold">{sampleText}</span>
  </PrivatePage>
);

export const CaptionBold = CaptionBoldTemplate.bind({});

const ButtonTemplate: ComponentStory<typeof PrivatePage> = (args) => (
  <PrivatePage {...args}>
    <button className="text-button">{sampleText}</button>
  </PrivatePage>
);

export const Button = ButtonTemplate.bind({});

const LinkLTemplate: ComponentStory<typeof PrivatePage> = (args) => (
  <PrivatePage {...args}>
    <a className="link-l">{sampleText}</a>
  </PrivatePage>
);

export const LinkL = LinkLTemplate.bind({});

const LinkLBoldTemplate: ComponentStory<typeof PrivatePage> = (args) => (
  <PrivatePage {...args}>
    <a className="link-l font-bold">{sampleText}</a>
  </PrivatePage>
);

export const LinkLBold = LinkLBoldTemplate.bind({});

const LinkMTemplate: ComponentStory<typeof PrivatePage> = (args) => (
  <PrivatePage {...args}>
    <a className="link-m">{sampleText}</a>
  </PrivatePage>
);

export const LinkM = LinkMTemplate.bind({});

const LinkMBoldTemplate: ComponentStory<typeof PrivatePage> = (args) => (
  <PrivatePage {...args}>
    <a className="link-m font-bold">{sampleText}</a>
  </PrivatePage>
);

export const LinkMBold = LinkMBoldTemplate.bind({});

const LinkSTemplate: ComponentStory<typeof PrivatePage> = (args) => (
  <PrivatePage {...args}>
    <a className="link-s">{sampleText}</a>
  </PrivatePage>
);

export const LinkS = LinkSTemplate.bind({});

const LinkSBoldTemplate: ComponentStory<typeof PrivatePage> = (args) => (
  <PrivatePage {...args}>
    <a className="link-s font-bold">{sampleText}</a>
  </PrivatePage>
);

export const LinkSBold = LinkSBoldTemplate.bind({});

const LinkCaptionTemplate: ComponentStory<typeof PrivatePage> = (args) => (
  <PrivatePage {...args}>
    <a className="link-caption">{sampleText}</a>
  </PrivatePage>
);

export const LinkCaption = LinkCaptionTemplate.bind({});
