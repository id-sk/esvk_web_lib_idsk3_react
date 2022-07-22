import React from 'react';
import classNames from 'classnames';

export interface AnchorCardProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  layout?: 'horizontal' | 'vertical';
  grid?: boolean;
}

const AnchorCard = React.forwardRef<HTMLAnchorElement, AnchorCardProps>(
  ({ children, className, layout = 'horizontal', grid, ...props }, ref) => {
    return (
      <a
        className={classNames(
          'anchor-card',
          { 'anchor-card--vertical': layout === 'vertical', 'anchor-card--grid': grid },
          className
        )}
        {...props}
        ref={ref}
      >
        {children}
      </a>
    );
  }
);

export default AnchorCard;
