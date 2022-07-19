import React, { ReactElement, ReactNode } from 'react';

export interface NavigationLinkOptionProps {
  label?: ReactNode;
  href?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  linkElement?: ReactElement;
}

const NavigationLinkOption = React.forwardRef<HTMLAnchorElement, NavigationLinkOptionProps>(
  ({ label, href, onClick, linkElement }, ref) => {
    return (
      <>
        {!!linkElement ? (
          linkElement
        ) : (
          <a href={href} onClick={onClick} ref={ref}>
            {label}
          </a>
        )}
      </>
    );
  }
);

export default NavigationLinkOption;
