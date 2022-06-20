import React, { ReactNode, Children } from 'react';

import { ArrowForwardIosIcon } from '../../../svgIcons/Navigation';
import { HomeIcon } from '../../../svgIcons/Actions';

export interface BreadcrumbsProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  homeLink?: ReactNode;
}

const Breadcrumbs = ({ children, homeLink = <a href="/">Domov</a> }: BreadcrumbsProps) => {
  const renderedChildren = Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return (
        <>
          <ArrowForwardIosIcon />
          {child}
        </>
      );
    }
  });
  return (
    <div className="breadcrumbs">
      <HomeIcon />
      {homeLink}
      {renderedChildren}
    </div>
  );
};

export default Breadcrumbs;
