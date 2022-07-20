import React, { ReactNode } from 'react';
import classNames from 'classnames';

export interface HeaderProps extends React.AllHTMLAttributes<HTMLElement> {
  fixed?: boolean;
  children?: ReactNode;
  logo?: ReactNode;
  mobileLogo?: ReactNode;
  secondaryNavigation?: ReactNode;
  largeMenu?: ReactNode;
  mobileMenu?: ReactNode;
}

const HeaderContainer = ({
  fixed = false,
  children,
  secondaryNavigation,
  className,
  logo,
  mobileLogo,
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
      {!!children && (
        <div className="header-container">
          {!!logo && (
            <>
              {mobileLogo ? (
                <>
                  <span className="header-container__mobile-logo">{mobileLogo}</span>
                  <span className="header-container__desktop-logo">{logo}</span>
                </>
              ) : (
                logo
              )}
            </>
          )}
          {children}
        </div>
      )}
      {!!largeMenu && <div className="header-container__menu">{largeMenu}</div>}
      {!!mobileMenu && <div className="header-container__menu--mobile">{mobileMenu}</div>}
    </header>
  );
};

export default HeaderContainer;
