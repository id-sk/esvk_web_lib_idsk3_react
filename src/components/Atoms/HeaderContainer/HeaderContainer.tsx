import React, { ReactNode } from 'react';
import classNames from 'classnames';

export interface HeaderProps extends React.AllHTMLAttributes<HTMLElement> {
  fixed?: boolean;
  children?: ReactNode;
  secondaryNavigation?: ReactNode;
  largeMenu?: ReactNode;
  mobileMenu?: ReactNode;
}

const HeaderContainer = ({
  fixed = false,
  children,
  secondaryNavigation,
  className,
  largeMenu,
  mobileMenu,
  ...props
}: HeaderProps) => {
  const headerClasses = classNames(
    'header-container__wrapper',
    {
      sticky: fixed
    },
    className
  );

  return (
    <header className={headerClasses} {...props}>
      {!!secondaryNavigation && secondaryNavigation}
      {!!children && <div className="header-container">{children}</div>}
      {!!largeMenu && <div className="header-container__menu">{largeMenu}</div>}
      {!!mobileMenu && <div className="header-container__menu--mobile">{mobileMenu}</div>}
    </header>
  );
};

export default HeaderContainer;
