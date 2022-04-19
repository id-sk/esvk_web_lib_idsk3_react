import React, { ReactNode } from 'react';
import classNames from 'classnames';

export interface HeaderProps extends React.AllHTMLAttributes<HTMLElement> {
  fixed?: boolean;
  children?: React.ReactNode;
  secondaryNavigation?: ReactNode;
}

const HeaderContainer = ({
  fixed = false,
  children,
  secondaryNavigation,
  ...props
}: HeaderProps) => {
  const headerClasses = classNames('w-full shadow-divider bg-white', {
    fixed
  });
  return (
    <header className={headerClasses} {...props}>
      {!!secondaryNavigation && secondaryNavigation}
      <div className="h-16 px-5 tb1:h-[6.25rem] tb1:px-[1.875rem] dl:px-4 flex items-center">
        {children}
      </div>
    </header>
  );
};

export default HeaderContainer;
