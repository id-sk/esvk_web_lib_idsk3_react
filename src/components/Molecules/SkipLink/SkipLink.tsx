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
      className="information-banner__skip-link"
    >
      <a href={href} className="link-s text-primary-medium font-bold skip-link" {...props}>
        {children}
      </a>
    </InformationBanner>
  );
};

export default SkipLink;
