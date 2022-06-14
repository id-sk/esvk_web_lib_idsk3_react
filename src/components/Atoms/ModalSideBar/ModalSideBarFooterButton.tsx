import React from 'react';

import { ArrowForwardIcon } from '../../../svgIcons/Navigation';

const ModalSideBarFooterButton = React.forwardRef<
  HTMLAnchorElement,
  React.AnchorHTMLAttributes<HTMLAnchorElement>
>(({ href, onClick, children, ...props }, ref) => {
  const elementProps = {
    className: 'modal-sidebar__footer-button',
    ...props
  };
  return (
    <a href={href} onClick={onClick} {...elementProps} ref={ref}>
      {children} <ArrowForwardIcon className="modal-sidebar__forward-icon" />
    </a>
  );
});

export default ModalSideBarFooterButton;
