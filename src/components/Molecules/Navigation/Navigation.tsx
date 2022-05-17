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
          arrowIcon={<ExpandMoreIcon className="navigation__arrow-icon" />}
          className="navigation__dropdown"
          optionClassName="navigation__dropdown-options"
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
      const linkClasses = classNames('navigation__link', {
        'navigation__link--clicked': clicked
      });
      return (
        <a className={linkClasses} key={index} href={item?.href} onClick={item?.onClick}>
          {item.label}
          {!!item.alert && <span className="navigation__link-alert">{item.alert}</span>}
        </a>
      );
    }
  };

  return (
    <nav className={`navigation ${className}`} {...props}>
      {!!links.length && links.map(renderLinks)}
    </nav>
  );
};

export default Navigation;
