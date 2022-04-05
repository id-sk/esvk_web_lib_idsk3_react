import React from 'react';
import classNames from 'classnames';

export interface NavigationProps extends React.AllHTMLAttributes<HTMLElement> {
  currentHref?: string | null;
  links?: {
    label: string;
    href?: string;
    onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  }[];
  innerClassNames?: string;
}

const Navigation = ({ links = [], currentHref, ...props }: NavigationProps) => {
  return (
    <nav className="px-10 h-full flex gap-6" {...props}>
      {!!links.length &&
        links.map((item, index) => {
          const clicked = (!!item.href && item.href) === currentHref;
          const linkClasses = classNames('h-full text-body-1 pt-1 border-b-4 flex items-center', {
            'border-blue-500 font-bold text-blue-500': clicked,
            'border-transparent': !clicked
          });
          return (
            <a
              className={linkClasses}
              key={index}
              href={!!item.href ? item.href : undefined}
              onClick={!!item.onClick ? item.onClick : undefined}
            >
              {item.label}
            </a>
          );
        })}
    </nav>
  );
};

export default Navigation;
