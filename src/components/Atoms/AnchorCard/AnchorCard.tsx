import React, { ReactNode } from 'react';
import classNames from 'classnames';

export interface AnchorCardProps {
  layout?: 'horizontal' | 'vertical';
  grid?: boolean;
  className?: string;
  children?: ReactNode;
}

const AnchorCard = ({ children, className, layout = 'horizontal', grid }: AnchorCardProps) => {
  return (
    <div
      className={classNames(
        'anchor-card',
        { 'anchor-card--vertical': layout === 'vertical', 'anchor-card--grid': grid },
        className
      )}
      data-testid="anchor-card"
    >
      {children}
    </div>
  );
};

export default AnchorCard;
