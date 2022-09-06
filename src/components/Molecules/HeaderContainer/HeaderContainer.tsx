import React, { ReactNode, useEffect, useState } from 'react';
import FocusLock from 'react-focus-lock';
import { ReactFocusLockProps } from 'react-focus-lock/interfaces';
import classNames from 'classnames';

export interface HeaderProps extends React.AllHTMLAttributes<HTMLElement> {
  fixed?: boolean;
  children?: ReactNode;
  logo?: ReactNode;
  secondaryNavigation?: ReactNode;
  largeMenu?: ReactNode;
  mobileMenu?: ReactNode;
  focusLock?: boolean;
  focusLockProps?: ReactFocusLockProps;
}

const HeaderContainer = ({
  fixed = false,
  children,
  secondaryNavigation,
  className,
  logo,
  largeMenu,
  mobileMenu,
  focusLock = false,
  focusLockProps,
  ...props
}: HeaderProps) => {
  const [isDesktop, setIsDesktop] = useState<boolean>(true);

  const headerClasses = classNames('header-container__wrapper', className);

  useEffect(() => {
    function handleWindowResize() {
      setIsDesktop(window.innerWidth < 1120 ? false : true);
    }

    window.addEventListener('load', handleWindowResize);
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('load', handleWindowResize);
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <FocusLock
      disabled={!!isDesktop ? true : !focusLock}
      className={classNames({
        'header-container__wrapper--sticky': fixed
      })}
      {...focusLockProps}
    >
      <header className={headerClasses} {...props}>
        {!!secondaryNavigation && secondaryNavigation}
        {!!children && (
          <div className="header-container">
            {logo}
            {children}
          </div>
        )}
        {!!largeMenu && <div className="header-container__menu">{largeMenu}</div>}
        {!!mobileMenu && <div className="header-container__menu--mobile">{mobileMenu}</div>}
      </header>
    </FocusLock>
  );
};

export default HeaderContainer;
