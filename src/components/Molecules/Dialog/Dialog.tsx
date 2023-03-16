import React, { ReactNode } from 'react';
import { CloseIcon } from '../../../svgIcons/Navigation';
import classNames from 'classnames';

export interface DialogProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  description?: string;
  opened?: boolean;
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
    'idsk-dialog-screen',
    {
      'idsk-dialog-screen--hidden': !opened
    },
    className
  );

  return (
    <div {...props} className={dialogClasses} id={id}>
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
                >
                  <CloseIcon />
                </button>
              </div>
              {!!description && <p className="idsk-dialog__header-description">{description}</p>}
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
    </div>
  );
};

export default Dialog;
