import classNames from 'classnames';
import React from 'react';

export interface TextSignpostProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  heading: string;
}

const TextSignpost = React.forwardRef<HTMLAnchorElement, TextSignpostProps>(
  ({ heading, children, className, ...props }, ref) => {
    return (
      <div className={classNames('text-signpost', className)}>
        <a className="anchor-card__heading" {...props} ref={ref}>
          {heading}
        </a>
        <div className="signpost__description">{children}</div>
      </div>
    );
  }
);

export default TextSignpost;
