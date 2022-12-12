import React, { ReactNode } from 'react';
import classNames from 'classnames';

import { CloseIcon } from '../../../svgIcons/Navigation';

export interface ModalSideBarProps extends React.AllHTMLAttributes<HTMLDivElement> {
  opened: boolean;
  toggleOpened: React.Dispatch<React.SetStateAction<boolean>>;
  heading: string;
  footer?: ReactNode | undefined;
  id?: string;
}

const ModalSideBar = ({
  opened,
  toggleOpened,
  heading,
  footer,
  children,
  className,
  id,
  ...props
}: ModalSideBarProps) => {
  const shadowClasses = classNames('modal-sidebar__shadow', {
    'modal-sidebar__shadow--hidden': !opened
  });
  const sidebarClasses = classNames(
    'modal-sidebar',
    {
      'modal-sidebar--hidden': !opened
    },
    className
  );

  return (
    <>
      <div
        className={shadowClasses}
        onClick={() => toggleOpened(false)}
        data-testid="sidebar-shadow"
      />
      <div className={sidebarClasses} id={id} {...props}>
        <div className="modal-sidebar__top-bar" />
        <div className="modal-sidebar__header">
          <h3>{heading}</h3>
          <button
            className="modal-sidebar__close-button"
            onClick={() => toggleOpened(false)}
            id={id ? id + '-close-button' : undefined}
          >
            <CloseIcon className="modal-sidebar__close-icon" />
          </button>
        </div>
        <div className="modal-sidebar__body">{children}</div>
        <div className="flex-auto" />
        {!!footer && <div className="modal-sidebar__footer">{footer}</div>}
      </div>
    </>
  );
};

export default ModalSideBar;
