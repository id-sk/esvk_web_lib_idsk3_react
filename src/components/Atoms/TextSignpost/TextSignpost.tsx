import classNames from 'classnames';
import React from 'react';

export interface TextSignpostProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  heading: string;
  subtitle?: string;
}

const TextSignpost = React.forwardRef<HTMLAnchorElement, TextSignpostProps>(
  ({ heading, subtitle, children, className, ...props }, ref) => {
    return (
      <div className={classNames('idsk-text-signpost', className)}>
        <h3>
          <a className="idsk-anchor-card__heading" {...props} ref={ref}>
            {heading}
          </a>
        </h3>
        {!!subtitle && <p className="idsk-text-signpost__subtitle">{subtitle}</p>}
        <div className="idsk-anchor-card__description">{children}</div>
      </div>
    );
  }
);

export default TextSignpost;
