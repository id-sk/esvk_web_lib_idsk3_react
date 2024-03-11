import React, { ReactNode, Children } from 'react';
import classNames from 'classnames';

import { ArrowForwardIosIcon } from '../../../svgIcons/Navigation';
import { ArrowBackIosIcon } from '../../../svgIcons/Navigation';
import { HomeIcon } from '../../../svgIcons/Actions';

export interface BreadcrumbsProps extends React.AllHTMLAttributes<HTMLDivElement> {
  homeLink?: ReactNode;
  disableMobileVersion?: boolean;
}

const Breadcrumbs = ({
  children,
  homeLink = <a href="/">Domov</a>,
  disableMobileVersion = false,
  className,
  ...props
}: BreadcrumbsProps) => {
  const breadcrumbsClasses = classNames(
    'idsk-breadcrumbs',
    { 'flex-wrap': disableMobileVersion },
    className
  );

  const renderedChildren = Children.map(children, (child, i) => {
    if (React.isValidElement(child)) {
      const isOneBeforeLast = i === Children.count(children) - 2;
      return (
        <div
          className={classNames('idsk-breadcrumbs__crumb', {
            'idsk-breadcrumbs__crumb--show-on-mobile tb2:text-base text-sm':
              isOneBeforeLast && !disableMobileVersion,
            'flex items-start': disableMobileVersion
          })}
        >
          <div>
            <ArrowForwardIosIcon
              className={classNames(
                !disableMobileVersion
                  ? 'idsk-breadcrumbs__forward-icon'
                  : 'flex tb2:mt-[0.55rem] mt-[0.36rem] tb2:text-base text-sm'
              )}
            />
          </div>
          {isOneBeforeLast && !disableMobileVersion && (
            <ArrowBackIosIcon className="idsk-breadcrumbs__back-icon" />
          )}
          {child}
        </div>
      );
    }
  });

  return (
    <div className={breadcrumbsClasses} {...props}>
      <div
        className={classNames('idsk-breadcrumbs__crumb', {
          'idsk-breadcrumbs__crumb--show-on-mobile':
            Children.count(children) < 2 && !disableMobileVersion,
          flex: disableMobileVersion
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
