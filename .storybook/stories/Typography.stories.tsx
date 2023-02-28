import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PageLayout } from '../../src/components/Templates';
import '/src/styles/idsk3_theme.css';

export default {
  title: 'Core/Typography',
  component: PageLayout,
  parameters: {
    layout: 'fullscreen'
  }
} as ComponentMeta<typeof PageLayout>;

const sampleText = `Dve staršie hneď vedeli, čo si majú vybrať, a kázali si doniesť: tá drahé šaty, tá zlaté
      prstene, ale také, akým by tu doma páru nebolo. Iba najmladšia, vždy tichá a krotká ako
      ovečka, tá aj teraz mlčala.`;

const Headline1Template: ComponentStory<typeof PageLayout> = (args) => (
  <PageLayout {...args}>
    <h1>{sampleText}</h1>
  </PageLayout>
);

export const Headline1 = Headline1Template.bind({});

const Headline2Template: ComponentStory<typeof PageLayout> = (args) => (
  <PageLayout {...args}>
    <h2>{sampleText}</h2>
  </PageLayout>
);

export const Headline2 = Headline2Template.bind({});

const Headline3Template: ComponentStory<typeof PageLayout> = (args) => (
  <PageLayout {...args}>
    <h3>{sampleText}</h3>
  </PageLayout>
);

export const Headline3 = Headline3Template.bind({});

const Headline4Template: ComponentStory<typeof PageLayout> = (args) => (
  <PageLayout {...args}>
    <h4>{sampleText}</h4>
  </PageLayout>
);

export const Headline4 = Headline4Template.bind({});

const SubtitleTemplate: ComponentStory<typeof PageLayout> = (args) => (
  <PageLayout {...args}>
    <p className="subtitle">{sampleText}</p>
  </PageLayout>
);

export const Subtitle = SubtitleTemplate.bind({});

const SubtitleBoldTemplate: ComponentStory<typeof PageLayout> = (args) => (
  <PageLayout {...args}>
    <p className="subtitle font-bold">{sampleText}</p>
  </PageLayout>
);

export const SubtitleBold = SubtitleBoldTemplate.bind({});

const BodyTemplate: ComponentStory<typeof PageLayout> = (args) => (
  <PageLayout {...args}>
    <p className="text-body">{sampleText}</p>
  </PageLayout>
);

export const Body = BodyTemplate.bind({});

const BodyBoldTemplate: ComponentStory<typeof PageLayout> = (args) => (
  <PageLayout {...args}>
    <p className="text-body font-bold">{sampleText}</p>
  </PageLayout>
);

export const BodyBold = BodyBoldTemplate.bind({});

const Body1Template: ComponentStory<typeof PageLayout> = (args) => (
  <PageLayout {...args}>
    <p className="text-body-1">{sampleText}</p>
  </PageLayout>
);

export const Body1 = Body1Template.bind({});

const Body1BoldTemplate: ComponentStory<typeof PageLayout> = (args) => (
  <PageLayout {...args}>
    <p className="text-body-1 font-bold">{sampleText}</p>
  </PageLayout>
);

export const Body1Bold = Body1BoldTemplate.bind({});

const CaptionTemplate: ComponentStory<typeof PageLayout> = (args) => (
  <PageLayout {...args}>
    <span className="caption">{sampleText}</span>
  </PageLayout>
);

export const Caption = CaptionTemplate.bind({});

const CaptionBoldTemplate: ComponentStory<typeof PageLayout> = (args) => (
  <PageLayout {...args}>
    <span className="caption font-bold">{sampleText}</span>
  </PageLayout>
);

export const CaptionBold = CaptionBoldTemplate.bind({});

const ButtonTemplate: ComponentStory<typeof PageLayout> = (args) => (
  <PageLayout {...args}>
    <button className="text-button">{sampleText}</button>
  </PageLayout>
);

export const Button = ButtonTemplate.bind({});

const LinkLTemplate: ComponentStory<typeof PageLayout> = (args) => (
  <PageLayout {...args}>
    <a className="link-l">{sampleText}</a>
  </PageLayout>
);

export const LinkL = LinkLTemplate.bind({});

const LinkLBoldTemplate: ComponentStory<typeof PageLayout> = (args) => (
  <PageLayout {...args}>
    <a className="link-l font-bold">{sampleText}</a>
  </PageLayout>
);

export const LinkLBold = LinkLBoldTemplate.bind({});

const LinkMTemplate: ComponentStory<typeof PageLayout> = (args) => (
  <PageLayout {...args}>
    <a className="link-m">{sampleText}</a>
  </PageLayout>
);

export const LinkM = LinkMTemplate.bind({});

const LinkMBoldTemplate: ComponentStory<typeof PageLayout> = (args) => (
  <PageLayout {...args}>
    <a className="link-m font-bold">{sampleText}</a>
  </PageLayout>
);

export const LinkMBold = LinkMBoldTemplate.bind({});

const LinkSTemplate: ComponentStory<typeof PageLayout> = (args) => (
  <PageLayout {...args}>
    <a className="link-s">{sampleText}</a>
  </PageLayout>
);

export const LinkS = LinkSTemplate.bind({});

const LinkSBoldTemplate: ComponentStory<typeof PageLayout> = (args) => (
  <PageLayout {...args}>
    <a className="link-s font-bold">{sampleText}</a>
  </PageLayout>
);

export const LinkSBold = LinkSBoldTemplate.bind({});

const LinkCaptionTemplate: ComponentStory<typeof PageLayout> = (args) => (
  <PageLayout {...args}>
    <a className="link-caption">{sampleText}</a>
  </PageLayout>
);

export const LinkCaption = LinkCaptionTemplate.bind({});
