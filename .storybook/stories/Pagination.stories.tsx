import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Pagination } from '../../src/components/Atoms';
import '/src/styles/idsk3_theme.css';
import PaginationDrop from '../../src/components/Atoms/Pagination/PaginationDrop';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Pagination',
  component: Pagination
} as ComponentMeta<typeof Pagination>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Pagination> = (args) => (
  <>
    <div className="flex justify-between gap-3 flex-wrap">
      <Pagination {...args} />
      <PaginationDrop
        id="pagination-show-count"
        title={15}
        items={[
          { label: '20', key: '20' },
          { label: '15', key: '15' },
          { label: '10', key: '10' },
          { label: '5', key: '5' }
        ]}
        caption="Počet položiek na stránke"
        onClick={() => {}}
      />
    </div>
  </>
);

export const PaginationDefault = Template.bind({});
PaginationDefault.args = {
  siblingsCount: 1,
  pageCount: 15,
  previousAriaLabel: 'Predchádzajúca stránka',
  nextAriaLabel: 'Nasledujúca stránka',
  ariaLabelBuilder: (page) => `Stránka ${page}`
};

export const PaginationLarge = Template.bind({});
PaginationLarge.args = {
  siblingsCount: 3,
  pageCount: 150,
  boundaryPagesCount: 3,
  previousAriaLabel: 'Predchádzajúca stránka',
  nextAriaLabel: 'Nasledujúca stránka',
  ariaLabelBuilder: (page) => `Stránka ${page}`
};

export const PaginationInitialPage = Template.bind({});
PaginationInitialPage.args = {
  initialPage: 7,
  siblingsCount: 1,
  pageCount: 15,
  previousAriaLabel: 'Predchádzajúca stránka',
  nextAriaLabel: 'Nasledujúca stránka',
  ariaLabelBuilder: (page) => `Stránka ${page}`
};

export const PaginationWithCaption = Template.bind({});
PaginationWithCaption.args = {
  pageCount: 150,
  caption: 'Zobrazené 1-5 zo 59 výsledkov',
  previousAriaLabel: 'Predchádzajúca stránka',
  nextAriaLabel: 'Nasledujúca stránka',
  ariaLabelBuilder: (page) => `Stránka ${page}`
};
