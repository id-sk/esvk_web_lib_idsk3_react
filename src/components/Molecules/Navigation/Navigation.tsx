import React, { ReactNode } from 'react';
import classNames from 'classnames';

import { DropDown } from '../../Atoms';
import { ExpandMoreIcon } from '../../../svgIcons/Navigation';

interface LinkProps {
  label: ReactNode;
  href?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  alert?: number;
}
interface NavLinkProps extends LinkProps {
  options?: LinkProps[];
}

export interface NavigationProps extends React.AllHTMLAttributes<HTMLElement> {
  currentHref?: string | null;
  links?: NavLinkProps[];
  innerClassNames?: string;
}

const Navigation = ({ links = [], currentHref, className = '', ...props }: NavigationProps) => {
  const renderLinks = (item: NavLinkProps, index: number) => {
    if (!!item.options && !!item.options.length) {
      return (
        <DropDown
          dropDownTitle={item.label}
          arrowIcon={<ExpandMoreIcon width="1.5rem" height="1.5rem" />}
          className="h-full hover:bg-blue-100 flex items-center px-3 text-body-1 text-black"
          optionClassName="-left-2 top-3/4"
          key={index}
        >
          {item.options?.map((option, optIndex) => (
            <a key={optIndex} href={option?.href} onClick={option?.onClick}>
              {option.label}
            </a>
          ))}
        </DropDown>
      );
    } else {
      const clicked = !!item.href && item.href === currentHref;
      const linkClasses = classNames(
        'h-full text-body-1 text-black pt-1 border-b-4 flex items-center gap-1.5 px-3 hover:bg-blue-100',
        {
          'border-blue-500 font-bold text-blue-500': clicked,
          'border-transparent': !clicked
        }
      );
      return (
        <a className={linkClasses} key={index} href={item?.href} onClick={item?.onClick}>
          {item.label}
          {!!item.alert && (
            <span className="w-5 h-5 rounded-full bg-primary text-white text-xs flex items-center justify-center font-bold">
              {item.alert}
            </span>
          )}
        </a>
      );
    }
  };

  return (
    <nav className={`px-10 h-full flex items-center ${className}`} {...props}>
      {!!links.length && links.map(renderLinks)}
    </nav>
  );
};

export default Navigation;
