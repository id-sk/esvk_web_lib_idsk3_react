import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SecondaryNavigation } from '../../src/components/Molecules';
import '/src/styles/idsk3_theme.css';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Molecules/SecondaryNavigation',
  component: SecondaryNavigation
} as ComponentMeta<typeof SecondaryNavigation>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Template: ComponentStory<typeof SecondaryNavigation> = (args) => {
  return <SecondaryNavigation {...args} />;
};

Template.args = {
  id: 'secondary-navigation',
  heading: 'Oficiálna stránka',
  headingButton: 'verejnej správy',
  mobileHeading: 'SK',
  mobileHeadingButton: 'e-gov',
  children: (
    <div className="grid grid-cols-1 gap-4 tb2:grid-cols-2 tb2:gap-8">
      <div>
        <h3 className="idsk-text-body-1">Doména gov.sk je oficálna</h3>
        <p className="py-2.5">
          Toto je oficiálna webová stránka orgánu verejnej moci Slovenskej republiky. Oficiálne
          stránky využívajú najmä doménu gov.sk.{' '}
          <a
            href="https://www.slovensko.sk/sk/agendy/agenda/_organy-verejnej-moci"
            target="_blank"
            className="idsk-link-s text-white"
          >
            Odkazy na jednotlivé webové sídla orgánov verejnej moci nájdete na tomto odkaze.
          </a>
        </p>
      </div>
      <div>
        <h3 className="idsk-text-body-1">Táto stránka je zabezpečená</h3>
        <p className="py-2.5">
          Buďte pozorní a vždy sa uistite, že zdieľate informácie iba cez zabezpečenú webovú stránku
          verejnej správy SR. Zabezpečená stránka vždy začína https:// pred názvom domény webového
          sídla.
        </p>
      </div>
    </div>
  ),
  dropDownTitle: 'slovenčina',
  dropDownOptions: [<a>english</a>]
};
