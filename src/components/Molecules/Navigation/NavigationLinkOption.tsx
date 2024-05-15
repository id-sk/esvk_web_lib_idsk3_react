import classNames from 'classnames';
import React, { ReactElement, ReactNode } from 'react';

export interface NavigationLinkOptionProps {
  label?: ReactNode;
  href?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  linkElement?: ReactElement;
  title?: string;
  selected?: boolean;
}

const NavigationLinkOption = React.forwardRef<HTMLAnchorElement, NavigationLinkOptionProps>(
  ({ label, href, onClick, linkElement, title, selected }, ref) => {
    return (
      <>
        {!!linkElement ? (
          React.cloneElement(linkElement, {
            className: classNames(linkElement.props.className, 'absolute')
          })
        ) : (
          <a
            href={href}
            onClick={onClick}
            ref={ref}
            title={title}
            className={classNames({
              'idsk-navigation__link--dropdown-link': selected
            })}
          >
            {label}
          </a>
        )}
      </>
    );
  }
);

export default NavigationLinkOption;
