import React from 'react';
import classNames from 'classnames';

import { ArrowForwardIcon } from '../../../svgIcons/Navigation';

const ModalSideBarFooterButton = React.forwardRef<
  HTMLAnchorElement,
  React.AnchorHTMLAttributes<HTMLAnchorElement>
>(({ href, onClick, children, className, ...props }, ref) => {
  return (
    <a
      ref={ref}
      href={href}
      onClick={onClick}
      className={classNames('modal-sidebar__footer-button', className)}
      {...props}
    >
      {children} <ArrowForwardIcon className="modal-sidebar__forward-icon" />
    </a>
  );
});

export default ModalSideBarFooterButton;
