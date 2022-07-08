import React, { ReactElement } from 'react';
import classNames from 'classnames';

import { NavigationLinkProps } from './NavigationLink';

export interface NavigationProps extends React.AllHTMLAttributes<HTMLElement> {
  children?: ReactElement<NavigationLinkProps> | ReactElement<NavigationLinkProps>[];
  fullNav?: boolean;
}

const Navigation = ({ children, className, fullNav = false, ...props }: NavigationProps) => {
  const navigationClasses = classNames(
    'navigation',
    {
      'navigation--full': fullNav
    },
    className
  );

  return (
    <nav className={navigationClasses} {...props}>
      {children}
    </nav>
  );
};

export default Navigation;
