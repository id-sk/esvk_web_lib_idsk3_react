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
          arrowIcon={<ExpandMoreIcon className="idsk-navigation__arrow-icon" />}
          className="idsk-navigation__dropdown"
          optionClassName="idsk-navigation__dropdown-options"
          buttonClassName="idsk-navigation__dropdown-button"
        >
          {children}
        </DropDown>
      );
    }

    const linkClasses = classNames('idsk-navigation__link', {
      'idsk-navigation__link--clicked': selected,
      'idsk-navigation__link--alerted': alert
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
        {!!alert && <span className="idsk-navigation__link-alert">{alert}</span>}
      </span>
    );
  }
);

export default NavigationLink;
