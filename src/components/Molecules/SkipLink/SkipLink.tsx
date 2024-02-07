import React from 'react';

export interface SkipLinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
  href: string;
}

const SkipLink = ({ href = '#', children, ...props }: SkipLinkProps) => {
  return (
    <div className="idsk-skip-link__wrapper">
      <a className="idsk-skip-link" href={href} {...props}>
        {children}
      </a>
    </div>
  );
};

export default SkipLink;
