import React, { ReactNode } from 'react';
import { CloseIcon } from '../../../svgIcons/Navigation';
import classNames from 'classnames';

export interface DialogProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description?: string;
  opened: boolean;
  toggleOpened?: () => void;
  primaryButton?: ReactNode;
  secondaryButton?: ReactNode;
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
  ...props
}: DialogProps) => {
  const dialogClasses = classNames(
    'dialog-screen',
    {
      'dialog-screen--hidden': !opened
    },
    className
  );

  return (
    <div {...props} className={dialogClasses} id={id}>
      <div className="dialog-wrapper">
        <div className="dialog">
          {!!title && (
            <div className="dialog__header">
              <div className="dialog__header-title">
                <h2>{title}</h2>
                <button
                  onClick={toggleOpened}
                  className="dialog__close-icon"
                  id={id ? id + '-dialog-close-button' : undefined}
                >
                  <CloseIcon />
                </button>
              </div>
              {!!description && <p className="dialog__header-description">{description}</p>}
            </div>
          )}

          <div className="dialog__content">{children}</div>

          {!!(secondaryButton || primaryButton) && (
            <div className="dialog__buttons">
              {secondaryButton}
              {primaryButton}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dialog;
