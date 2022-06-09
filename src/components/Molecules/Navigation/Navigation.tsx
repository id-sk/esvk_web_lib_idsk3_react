import React, { ReactElement } from 'react';
import classNames from 'classnames';

import { NavigationLinkProps } from './NavigationLink';

export interface NavigationProps extends React.AllHTMLAttributes<HTMLElement> {
  children?: ReactElement<NavigationLinkProps> | ReactElement<NavigationLinkProps>[];
}

const Navigation = ({ children, className, ...props }: NavigationProps) => {
  return (
    <nav className={classNames('navigation', className)} {...props}>
      {children}
    </nav>
  );
};

export default Navigation;
