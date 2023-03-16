import classNames from 'classnames';
import React, { useCallback, useEffect } from 'react';

import CloseIcon from '../../../svgIcons/Navigation/Close';

export interface SnackbarProps {
  open?: boolean;
  message?: string | JSX.Element;
  secondLineMessage?: string | JSX.Element;
  action?: string | JSX.Element;
  closeButton?: boolean;
  longAction?: boolean;
  autoHideDuration?: number;
  onClose?: () => void;
  onActionCall?: () => void;
  className?: string;
  actionClassName?: string;
}

const Snackbar: React.FC<SnackbarProps> = ({
  message,
  secondLineMessage,
  action,
  closeButton,
  open,
  longAction,
  autoHideDuration,
  onClose,
  onActionCall,
  className,
  actionClassName
}) => {
  const snackbarClasses = classNames(
    'idsk-snackbar',
    { 'idsk-snackbar--long-action': !!longAction },
    className
  );

  const handleClose = useCallback(() => {
    if (onClose) onClose();
  }, []);

  useEffect(() => {
    if (!!autoHideDuration) {
      const timer = setInterval(() => {
        handleClose();
      }, autoHideDuration);

      return () => {
        clearInterval(timer);
      };
    }
  }, [open, autoHideDuration, handleClose]);

  if (!!open) {
    return (
      <div className={snackbarClasses}>
        <div className="idsk-snackbar__message">
          {!!message && <div>{message}</div>}
          {!!secondLineMessage && <div>{secondLineMessage}</div>}
        </div>

        <div
          className={classNames('idsk-snackbar__actions-wrapper', {
            'idsk-snackbar__actions-wrapper--long-action': !!longAction
          })}
        >
          {!!action && (
            <div
              className={classNames('idsk-snackbar__action-button', actionClassName)}
              onClick={onActionCall}
            >
              {action}
            </div>
          )}
          {!!closeButton && (
            <button onClick={handleClose}>
              <CloseIcon
                className={classNames('idsk-snackbar__close-button', {
                  'idsk-snackbar__close-button--no-action-button': !action
                })}
              />
            </button>
          )}
        </div>
      </div>
    );
  }

  return null;
};

export default Snackbar;
