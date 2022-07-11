import React, { ReactNode } from 'react';
import classNames from 'classnames';

export interface HeaderProps extends React.AllHTMLAttributes<HTMLElement> {
  fixed?: boolean;
  children?: ReactNode;
  secondaryNavigation?: ReactNode;
  largeMenu?: ReactNode;
  layout?: 'public' | 'private';
}

const HeaderContainer = ({
  fixed = false,
  children,
  secondaryNavigation,
  className,
  largeMenu,
  layout = 'private',
  ...props
}: HeaderProps) => {
  const headerClasses = classNames(
    'header-container__wrapper',
    {
      sticky: fixed
    },
    className
  );

  const headerContainerClasses = classNames('header-container', {
    'header--private': layout == 'private',
    'header--public': layout == 'public'
  });

  return (
    <header className={headerClasses} {...props}>
      {!!secondaryNavigation && secondaryNavigation}
      {!!children && <div className={headerContainerClasses}>{children}</div>}
      {!!largeMenu && <div className="header-container header-menu">{largeMenu}</div>}
    </header>
  );
};

export default HeaderContainer;
