import React, { ReactNode, useState } from 'react';
import classNames from 'classnames';

export interface TooltipProps {
  tooltip: string;
  children: ReactNode;
  alignLeft?: boolean;
  positionUp?: boolean;
  isInstructive?: boolean;
  hideOnClick?: boolean;
}

const Tooltip = ({ tooltip, children, hideOnClick = true, ...props }: TooltipProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const tooltipClasses = classNames('idsk-tooltip', {
    'idsk-tooltip--left': !!props.alignLeft,
    'idsk-tooltip--up': !!props.positionUp,
    'idsk-tooltip--instructive': !!props.isInstructive
  });

  return (
    <div data-tooltip-visible={isVisible} data-tooltip={tooltip} className={tooltipClasses}>
      <div
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        onClick={() => {
          if (hideOnClick) setIsVisible(false);
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Tooltip;
