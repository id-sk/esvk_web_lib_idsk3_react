import React, { ReactNode } from 'react';
import classNames from 'classnames';

export interface TooltipProps {
  tooltip?: string;
  children?: ReactNode;
  alignLeft?: boolean;
  positionUp?: boolean;
  isInstructive?: boolean;
}

const Tooltip = ({ tooltip, children, ...props }: TooltipProps) => {
  const tooltipClasses = classNames('idsk-tooltip', {
    'idsk-tooltip--left': !!props.alignLeft,
    'idsk-tooltip--up': !!props.positionUp,
    'idsk-tooltip--instructive': !!props.isInstructive
  });
  return (
    <div role="tooltip" title={tooltip} data-tooltip={tooltip} className={tooltipClasses}>
      {children}
    </div>
  );
};

export default Tooltip;
