import React from 'react';
import classNames from 'classnames';

export interface IconLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  active?: boolean;
}

const IconLink = React.forwardRef<HTMLAnchorElement, IconLinkProps>(
  ({ children, active, className, ...props }, ref) => {
    const linkClasses = classNames(
      'icon-link',
      {
        'icon-link--active': active
      },
      className
    );
    return (
      <a className={linkClasses} ref={ref} {...props}>
        {children}
      </a>
    );
  }
);

export default IconLink;
