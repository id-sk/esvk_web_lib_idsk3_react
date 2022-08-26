import React, { ReactNode } from 'react';
import classNames from 'classnames';

export interface TooltipProps {
  tooltip?: string;
  children?: ReactNode;
  alignLeft?: boolean;
  positionUp?: boolean;
}

const Tooltip = ({ tooltip, children, ...props }: TooltipProps) => {
  const tooltipClasses = classNames('tooltip', {
    'tooltip--left': !!props.alignLeft,
    'tooltip--up': !!props.positionUp
  });
  return (
    <span data-tooltip={tooltip} className={tooltipClasses}>
      {children}
    </span>
  );
};

export default Tooltip;
