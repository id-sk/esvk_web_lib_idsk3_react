import React, { ReactElement, ReactNode } from 'react';
import { ArrowRightIcon } from '../../../svgIcons/InPageNavigation';

export interface InPageNavigationLinkProps {
  label?: ReactNode;
  href?: string;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  linkElement?: ReactElement;
}

const InPageNavigationLink = React.forwardRef<HTMLAnchorElement, InPageNavigationLinkProps>(
  ({ label, className, href, onClick, linkElement }, ref) => {
    return (
      <>
        {!!linkElement ? (
          linkElement
        ) : (
          <a href={href} onClick={onClick} ref={ref} className={className}>
            <ArrowRightIcon /> {label}
          </a>
        )}
      </>
    );
  }
);

export default InPageNavigationLink;
