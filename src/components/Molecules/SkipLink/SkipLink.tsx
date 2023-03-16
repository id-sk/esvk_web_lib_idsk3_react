import React from 'react';
import InformationBanner from '../InformationBanner';

export interface SkipLinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
  href: string;
}

const SkipLink = ({ href = '#', children, ...props }: SkipLinkProps) => {
  return (
    <InformationBanner
      variant="information"
      type="announcement"
      hideCloseButton={true}
      className="idsk-information-banner__skip-link"
    >
      <a
        href={href}
        className="idsk-link-s idsk-text-primary-medium idsk-skip-link font-bold"
        {...props}
      >
        {children}
      </a>
    </InformationBanner>
  );
};

export default SkipLink;
