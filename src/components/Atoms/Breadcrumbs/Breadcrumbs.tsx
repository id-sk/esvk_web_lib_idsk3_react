import React, { ReactNode, Children } from 'react';
import classNames from 'classnames';

import { ArrowForwardIosIcon } from '../../../svgIcons/Navigation';
import { HomeIcon } from '../../../svgIcons/Actions';

export interface BreadcrumbsProps extends React.AllHTMLAttributes<HTMLDivElement> {
  homeLink?: ReactNode;
}

const Breadcrumbs = ({
  children,
  homeLink = <a href="/">Domov</a>,
  className,
  ...props
}: BreadcrumbsProps) => {
  const breadcrumbsClasses = classNames('breadcrumbs', className);
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
    <div className={breadcrumbsClasses} {...props}>
      <HomeIcon />
      {homeLink}
      {renderedChildren}
    </div>
  );
};

export default Breadcrumbs;
