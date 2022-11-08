import classNames from 'classnames';
import React from 'react';

export interface TextSignpostProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  heading: string;
  subtitle?: string;
}

const TextSignpost = React.forwardRef<HTMLAnchorElement, TextSignpostProps>(
  ({ heading, subtitle, children, className, ...props }, ref) => {
    return (
      <div className={classNames('text-signpost', className)}>
        <a className="anchor-card__heading" {...props} ref={ref}>
          {heading}
        </a>
        {!!subtitle && <p className="text-signpost__subtitle">{subtitle}</p>}
        <div className="anchor-card__description">{children}</div>
      </div>
    );
  }
);

export default TextSignpost;
