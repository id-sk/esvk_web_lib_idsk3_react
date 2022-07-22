import React, { Children, ReactNode } from 'react';
import classNames from 'classnames';
import { AnchorCard, AnchorCardProps } from '../../Atoms';

export interface SignpostProps extends AnchorCardProps {
  icon?: ReactNode;
  heading: string;
  arrowIcon?: ReactNode;
  inGroup?: boolean;
}

const Signpost = React.forwardRef<HTMLAnchorElement, SignpostProps>(
  (
    { inGroup, icon, heading, children, arrowIcon, className, layout = 'horizontal', ...props },
    ref
  ) => {
    return (
      <AnchorCard
        className={classNames({ 'signpost--in-group': inGroup }, className)}
        layout={layout}
        {...props}
        ref={ref}
      >
        {!!icon && <div className="signpost__icon">{icon}</div>}
        <div className="signpost__container">
          <div>
            <div className="anchor-card__heading">{heading}</div>
            <div className="signpost__description">{children}</div>
          </div>
          {layout === 'vertical' && <div className="signpost__arrow-icon">{arrowIcon}</div>}
        </div>
      </AnchorCard>
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
