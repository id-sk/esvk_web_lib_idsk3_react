import React, { ReactNode, Children } from 'react';
import classNames from 'classnames';

import { ArrowForwardIosIcon } from '../../../svgIcons/Navigation';
import { ArrowBackIosIcon } from '../../../svgIcons/Navigation';
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
  const breadcrumbsClasses = classNames('idsk-breadcrumbs', className);
  const renderedChildren = Children.map(children, (child, i) => {
    if (React.isValidElement(child)) {
      const isOneBeforeLast = i === Children.count(children) - 2;
      return (
        <div
          className={classNames('idsk-breadcrumbs__crumb', {
            'idsk-breadcrumbs__crumb--show-on-mobile': isOneBeforeLast
          })}
        >
          <ArrowForwardIosIcon className="idsk-breadcrumbs__forward-icon" />
          {isOneBeforeLast && <ArrowBackIosIcon className="idsk-breadcrumbs__back-icon" />}
          {child}
        </div>
      );
    }
  });
  return (
    <div className={breadcrumbsClasses} {...props}>
      <div
        className={classNames('idsk-breadcrumbs__crumb', {
          'idsk-breadcrumbs__crumb--show-on-mobile': Children.count(children) < 2
        })}
      >
        <HomeIcon />
        {homeLink}
      </div>
      {renderedChildren}
    </div>
  );
};

export default Breadcrumbs;
