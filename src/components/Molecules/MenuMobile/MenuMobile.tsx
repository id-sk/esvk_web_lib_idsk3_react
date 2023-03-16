import React, { ReactNode } from 'react';
import classNames from 'classnames';

export interface MenuMobileProps extends React.AllHTMLAttributes<HTMLDivElement> {
  heading?: ReactNode | string;
  opened?: boolean;
}

const MenuMobile = ({
  heading,
  opened = false,
  children,
  className,
  ...props
}: MenuMobileProps) => {
  const menuClasses = classNames(
    'idsk-menu--mobile',
    {
      hidden: !opened
    },
    className
  );

  return (
    <div className={menuClasses} {...props}>
      {!!heading && (
        <div className="idsk-menu--mobile__heading">
          {typeof heading === 'string' ? <h2>{heading}</h2> : heading}
        </div>
      )}
      {children}
    </div>
  );
};

export default MenuMobile;
