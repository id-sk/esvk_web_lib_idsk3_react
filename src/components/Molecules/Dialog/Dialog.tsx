import React, { ReactNode } from 'react';
import { CloseIcon } from '../../../svgIcons/Navigation';
import classNames from 'classnames';

export interface DialogProps {
  title: string;
  description?: string;
  children?: ReactNode;
  opened: boolean;
  toggleOpened?: () => void;
  id?: string;
  primaryButton?: ReactNode;
  secondaryButton?: ReactNode;
}

const Dialog = ({ opened, toggleOpened, id, ...props }: DialogProps) => {
  const dialogClasses = classNames('dialog-screen', {
    'dialog-screen--hidden': !opened
  });

  return (
    <div className={dialogClasses}>
      <div className="dialog">
        <div className="dialog__header">
          <div className="dialog__header-title">
            <h2>{props.title}</h2>
            <button
              onClick={toggleOpened}
              className="dialog__close-icon"
              id={id ? id + '-dialog-close-button' : undefined}
            >
              <CloseIcon />
            </button>
          </div>
          {!!props.description && <p className="subtitle mt-4">{props.description}</p>}
        </div>

        <div className="flex gap-2 flex-col flex-start px-7 py-5">{props.children}</div>
        <div className="dialog__buttons">
          {props.secondaryButton}
          {props.primaryButton}
        </div>
      </div>
    </div>
  );
};

export default Dialog;
