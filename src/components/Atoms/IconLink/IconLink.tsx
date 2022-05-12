import React from 'react';
import classNames from 'classnames';

export interface IconLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  active?: boolean;
}

const IconLink = ({ children, active, className, ...props }: IconLinkProps) => {
  const linkClasses = classNames(
    'icon-link',
    {
      'icon-link--active': active
    },
    className
  );
  return (
    <a className={linkClasses} {...props}>
      {children}
    </a>
  );
};

export default IconLink;
