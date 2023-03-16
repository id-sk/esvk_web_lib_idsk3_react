import React, { ReactNode } from 'react';
import classNames from 'classnames';

export interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {
  image?: ReactNode;
  title?: string;
  shortTitle?: string;
  subtitle?: string;
  shortSubtitle?: string;
}

const Logo = ({
  image,
  title,
  subtitle,
  shortTitle = title,
  shortSubtitle,
  className = '',
  ...props
}: LogoProps) => {
  return (
    <div className={classNames('idsk-logo', className)} {...props}>
      {image && <div className="idsk-logo__image">{image}</div>}
      {title && (
        <div className="idsk-logo__titles">
          <div className="idsk-logo__title">{title}</div>
          <div className="idsk-logo__short-title">{shortTitle}</div>
          <div className="idsk-logo__subtitle">{subtitle}</div>
          {shortSubtitle && <div className="idsk-logo__short-subtitle">{shortSubtitle}</div>}
        </div>
      )}
    </div>
  );
};

export default Logo;
