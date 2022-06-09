import React, { ReactElement, ReactNode } from 'react';

export interface NavigationLinkOptionProps {
  label?: ReactNode;
  href?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  linkElement?: ReactElement;
}

const NavigationLinkOption = ({ label, href, onClick, linkElement }: NavigationLinkOptionProps) => {
  return (
    <>
      {!!linkElement ? (
        linkElement
      ) : (
        <a href={href} onClick={onClick}>
          {label}
        </a>
      )}
    </>
  );
};

export default NavigationLinkOption;
