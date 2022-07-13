import React, { Children, ReactNode } from 'react';
import classNames from 'classnames';

export interface SignpostProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  icon?: ReactNode;
  heading: string;
  arrowIcon?: ReactNode;
  inGroup?: boolean;
  layout?: 'horizontal' | 'vertical';
}

const Signpost = React.forwardRef<HTMLAnchorElement, SignpostProps>(
  (
    { inGroup, icon, heading, children, arrowIcon, className, layout = 'horizontal', ...props },
    ref
  ) => {
    return (
      <a
        className={classNames(
          'signpost',
          inGroup ? 'signpost--in-group' : 'signpost--rounded-border',
          { 'signpost--vertical': layout === 'vertical' },
          className
        )}
        {...props}
        ref={ref}
      >
        {!!icon && <div className="signpost__icon">{icon}</div>}
        <div className="signpost__container">
          <div>
            <div className="signpost__heading">{heading}</div>
            <div className="signpost__description">{children}</div>
          </div>
          {layout === 'vertical' && <div className="signpost__arrow-icon">{arrowIcon}</div>}
        </div>
      </a>
    );
  }
);

export function SignpostsGroup({ children }: React.AllHTMLAttributes<HTMLDivElement>) {
  const renderedChildren = Children.map<ReactNode, ReactNode>(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        inGroup: true
      });
    }
  });
  return <div className="signpost-group">{renderedChildren}</div>;
}

export default Signpost;
