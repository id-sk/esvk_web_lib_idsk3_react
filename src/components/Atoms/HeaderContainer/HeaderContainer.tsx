import React, { ReactNode } from 'react';
import classNames from 'classnames';

export interface HeaderProps extends React.AllHTMLAttributes<HTMLElement> {
  fixed?: boolean;
  children?: ReactNode;
  secondaryNavigation?: ReactNode;
}

const HeaderContainer = ({
  fixed = false,
  children,
  secondaryNavigation,
  className,
  ...props
}: HeaderProps) => {
  const headerClasses = classNames(
    'w-full shadow-divider bg-white top-0 z-40 inset-x-0',
    {
      sticky: fixed
    },
    className
  );

  return (
    <header className={headerClasses} {...props}>
      {!!secondaryNavigation && secondaryNavigation}
      <div className="h-16 tb1:h-[6.25rem] relative inset-x-0 mx-auto flex items-center px-5 tb1:px-8 dm2:px-40 max-w-[114rem]">
        {children}
      </div>
    </header>
  );
};

export default HeaderContainer;
