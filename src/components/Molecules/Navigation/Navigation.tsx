import React, { ReactElement } from 'react';
import classNames from 'classnames';

import { NavigationLinkProps } from './NavigationLink';

export interface NavigationProps extends React.AllHTMLAttributes<HTMLElement> {
  children?: ReactElement<NavigationLinkProps> | ReactElement<NavigationLinkProps>[];
  fullNav?: boolean;
  label?: string;
}

const Navigation = ({
  children,
  className,
  fullNav = false,
  label = '',
  ...props
}: NavigationProps) => {
  const navigationClasses = classNames(
    'idsk-navigation',
    {
      'idsk-navigation--full': fullNav
    },
    className
  );

  return (
    <nav className={navigationClasses} {...props}>
      {!!label && <span className="idsk-navigation__label">{label}</span>}
      {children}
    </nav>
  );
};

export default Navigation;
