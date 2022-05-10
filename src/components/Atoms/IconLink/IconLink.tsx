import React from 'react';
import classNames from 'classnames';

export interface IconLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  active?: boolean;
}

const IconLink = ({ children, active, className, ...props }: IconLinkProps) => {
  const linkClasses = classNames(
    'w-10 h-10 rounded-full hover:bg-blue-100 flex items-center justify-center text-blue-600 cursor-pointer',
    {
      'bg-blue-100': active
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
