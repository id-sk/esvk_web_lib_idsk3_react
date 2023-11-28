import React, { ReactNode } from 'react';
import FocusLock from 'react-focus-lock';
import { CloseIcon } from '../../../svgIcons/Navigation';
import classNames from 'classnames';
import { ReactFocusLockProps } from 'react-focus-lock/interfaces';

export interface DialogProps extends ReactFocusLockProps {
  id?: string;
  title?: string;
  description?: string;
  opened?: boolean;
  toggleOpened?: () => void;
  primaryButton?: ReactNode;
  secondaryButton?: ReactNode;
  closeButtonAriaLabel?: string;
}

const Dialog = ({
  opened,
  toggleOpened,
  id,
  className,
  title,
  description,
  children,
  primaryButton,
  secondaryButton,
  closeButtonAriaLabel,
  ...props
}: DialogProps) => {
  const dialogClasses = classNames(
    'idsk-dialog-screen',
    {
      'idsk-dialog-screen--hidden': !opened
    },
    className
  );

  return (
    <>
      {opened && (
        <FocusLock {...props} className={dialogClasses} lockProps={{ id: id }}>
          <div className="idsk-dialog-wrapper">
            <div className="idsk-dialog">
              {!!title && (
                <div className="idsk-dialog__header">
                  <div className="idsk-dialog__header-title">
                    <h2>{title}</h2>
                    <button
                      onClick={toggleOpened}
                      className="idsk-dialog__close-icon"
                      id={id ? id + '-dialog-close-button' : undefined}
                      aria-label={closeButtonAriaLabel}
                    >
                      <CloseIcon />
                    </button>
                  </div>
                  {!!description && (
                    <p className="idsk-dialog__header-description">{description}</p>
                  )}
                </div>
              )}

              <div className="idsk-dialog__content">{children}</div>

              {!!(secondaryButton || primaryButton) && (
                <div className="idsk-dialog__buttons">
                  {secondaryButton}
                  {primaryButton}
                </div>
              )}
            </div>
          </div>
        </FocusLock>
      )}
    </>
  );
};

export default Dialog;
