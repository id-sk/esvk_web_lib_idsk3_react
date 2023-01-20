import classNames from 'classnames';
import React, { useEffect } from 'react';

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
    'snackbar',
    { 'snackbar--long-action': !!longAction },
    className
  );

  const handleClose = () => {
    if (onClose) onClose();
  };

  useEffect(() => {
    if (!!autoHideDuration) {
      const timer = setInterval(() => {
        handleClose();
      }, autoHideDuration);

      return () => {
        clearInterval(timer);
      };
    }
  }, [open, autoHideDuration]);

  if (!!open) {
    return (
      <div className={snackbarClasses}>
        <div className="pr-[6.25rem]">
          {!!message && <div>{message}</div>}
          {!!secondLineMessage && <div>{secondLineMessage}</div>}
        </div>

        <div
          className={classNames('snackbar__actions-wrapper', {
            'mt-4': !!longAction
          })}
        >
          {!!action && (
            <div
              className={classNames('snackbar__action-button', actionClassName)}
              onClick={onActionCall}
            >
              {action}
            </div>
          )}
          {!!closeButton && (
            <button onClick={handleClose}>
              <CloseIcon
                className={classNames('snackbar__close-button', {
                  'ml-auto': !action
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
