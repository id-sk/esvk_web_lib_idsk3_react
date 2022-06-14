import React, { ReactNode } from 'react';

import { ArrowForwardIcon } from '../../../svgIcons/Navigation';

export interface ModalSideBarFooterButtonProps {
  htmlTag?: 'button' | 'a';
  href?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  children?: ReactNode | undefined;
}

const ModalSideBarFooterButton = React.forwardRef<HTMLAnchorElement, ModalSideBarFooterButtonProps>(
  ({ href, onClick, children, htmlTag = 'a', ...props }, ref) => {
    const elementProps = {
      className: 'modal-sidebar__footer-button',
      ...props
    };
    return htmlTag === 'a' ? (
      <a href={href ? href : undefined} {...elementProps} ref={ref}>
        {children} <ArrowForwardIcon className="modal-sidebar__forward-icon" />
      </a>
    ) : (
      <button onClick={!!onClick ? onClick : undefined} {...elementProps}>
        {children} <ArrowForwardIcon className="modal-sidebar__forward-icon" />
      </button>
    );
  }
);

export default ModalSideBarFooterButton;
