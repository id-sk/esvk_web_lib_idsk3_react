import React, { ReactNode, useRef, useState } from 'react';
import classNames from 'classnames';

export interface TooltipProps {
  tooltip: string;
  children: ReactNode;
  alignLeft?: boolean;
  positionUp?: boolean;
  isInstructive?: boolean;
  hideOnClick?: boolean;
}

const Tooltip = ({
  tooltip,
  children,
  hideOnClick = true,
  isInstructive = false,
  positionUp,
  alignLeft,
  ...props
}: TooltipProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);
  const waitingToEnterRef = useRef<boolean>(true);

  const tooltipClasses = classNames('idsk-tooltip', {
    'idsk-tooltip--left': !!alignLeft,
    'idsk-tooltip--up': !!positionUp,
    'idsk-tooltip--instructive': !!isInstructive
  });

  const isWithin = (mouseX: number, mouseY: number, rect: DOMRect) => {
    return (
      rect.x < mouseX &&
      rect.x + rect.width > mouseX &&
      rect.y < mouseY &&
      rect.y + rect.height > mouseY
    );
  };

  const handleEnter = () => {
    if (!isVisible && waitingToEnterRef.current) setIsVisible(true);
  };

  const handleLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const element = ref.current;
    if (isVisible) {
      setIsVisible(false);
    }
    if (!element) return;

    if (!isWithin(e.clientX, e.clientY, element.getBoundingClientRect())) {
      waitingToEnterRef.current = true;
    }
  };

  const handleClick = () => {
    if (hideOnClick && isVisible) {
      setIsVisible(false);
      waitingToEnterRef.current = false;
    }
  };

  return (
    <div
      ref={ref}
      data-tooltip-visible={isVisible}
      data-tooltip={tooltip}
      className={tooltipClasses}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      onClick={handleClick}
    >
      {React.isValidElement(children) ? React.cloneElement(children, { ...props }) : children}
    </div>
  );
};

export default Tooltip;
