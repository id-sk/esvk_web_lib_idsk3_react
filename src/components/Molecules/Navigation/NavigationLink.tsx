import React, { ReactElement } from 'react';
import classNames from 'classnames';

import { DropDown } from '../../Atoms';
import { ExpandMoreIcon } from '../../../svgIcons/Navigation';
import { NavigationLinkOptionProps } from './NavigationLinkOption';

export interface NavigationLinkProps extends NavigationLinkOptionProps {
  id?: string;
  alert?: number;
  selected?: boolean;
  children?: ReactElement<NavigationLinkOptionProps> | ReactElement<NavigationLinkOptionProps>[];
}

const NavigationLink = React.forwardRef<HTMLAnchorElement, NavigationLinkProps>(
  ({ id, label, href, onClick, alert, selected, linkElement, children }, ref) => {
    if (!!children) {
      return (
        <DropDown
          id={id}
          dropDownTitle={label}
          arrowIcon={<ExpandMoreIcon className="navigation__arrow-icon" />}
          className="navigation__dropdown"
          optionClassName="navigation__dropdown-options"
          buttonClassName="dm1:px-3"
        >
          {children}
        </DropDown>
      );
    }

    const linkClasses = classNames('navigation__link', {
      'navigation__link--clicked': selected,
      'navigation__link--alerted': alert
    });

    return (
      <span className={linkClasses}>
        {!!linkElement ? (
          linkElement
        ) : (
          <a ref={ref} href={href} onClick={onClick}>
            {label}
          </a>
        )}
        {!!alert && <span className="navigation__link-alert">{alert}</span>}
      </span>
    );
  }
);

export default NavigationLink;
