import classNames from 'classnames';
import React, { useCallback, useEffect } from 'react';
import CloseIcon from '../../../svgIcons/Navigation/Close';
export interface SnackbarProps {
  id?: string;
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
  variant?: 'default' | 'info' | 'warning' | 'success' | 'attention';
  fixed?: boolean;
}

export interface SnackbarStackProps {
  snackbars: SnackbarProps[];
  setSnackbars: React.Dispatch<React.SetStateAction<SnackbarProps[]>>;
  className?: string;
  maxCount?: number;
  variant?: 'stack' | 'column';
}

const Snackbar: React.FC<SnackbarProps> = ({
  id,
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
  actionClassName,
  variant = 'default',
  fixed = true
}) => {
  const snackbarClasses = classNames(
    'idsk-snackbar',
    { 'idsk-snackbar--long-action': !!longAction },
    { 'idsk-snackbar--fixed': !!fixed },
    { 'idsk-snackbar-info': variant === 'info' },
    { 'idsk-snackbar-warning': variant === 'warning' },
    { 'idsk-snackbar-success': variant === 'success' },
    { 'idsk-snackbar-attention': variant === 'attention' },
    className
  );

  const handleClose = useCallback(() => {
    if (!!onClose) onClose();
  }, [onClose]);

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
      <div id={id} className={snackbarClasses}>
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
            <button
              className={classNames('idsk-snackbar__action-button', actionClassName)}
              onClick={onActionCall}
            >
              {action}
            </button>
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

export const SnackbarStack: React.FC<SnackbarStackProps> = ({
  snackbars,
  setSnackbars,
  className,
  maxCount,
  variant = 'column'
}) => {
  if (!!maxCount && variant === 'column') {
    if (snackbars.length > maxCount) {
      setSnackbars((p) => p.slice(1));
    }
  }

  if (variant === 'stack') {
    if (snackbars.length > 1) {
      setSnackbars((p) => p.slice(1));
    }
  }

  return (
    <>
      {!!snackbars.length && (
        <div className={classNames('idsk-snackbar__stack', className)}>
          {snackbars.map((snackbar, index) => (
            <Snackbar
              {...snackbar}
              className={classNames('bottom-0', snackbar.className)}
              fixed={false}
              onClose={() => {
                if (!!snackbar.onClose) {
                  snackbar.onClose();
                }
                setSnackbars((p) => p.filter((_, i) => i !== index));
              }}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default Snackbar;
