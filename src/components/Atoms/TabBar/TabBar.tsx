import React, { ReactElement } from 'react';
import classNames from 'classnames';

import { TabBarLinkProps } from './TabBarLink';

export interface TabBarProps extends React.AllHTMLAttributes<HTMLElement> {
  children?: ReactElement<TabBarLinkProps> | ReactElement<TabBarLinkProps>[];
}

const TabBar = ({ children, className, ...props }: TabBarProps) => {
  return (
    <nav className={classNames('tab-bar', className)} {...props}>
      {children}
    </nav>
  );
};

export default TabBar;
