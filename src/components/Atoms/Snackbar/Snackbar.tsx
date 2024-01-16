import classNames from 'classnames';
import React, { useCallback, useEffect, useMemo, useRef } from 'react';
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
  onClose?: (index?: number) => void;
  onActionCall?: () => void;
  className?: string;
  actionClassName?: string;
  variant?: 'default' | 'info' | 'warning' | 'success' | 'attention';
  fixed?: boolean;
  index?: number;
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
  fixed = true,
  index = 0
}) => {
  const timerRef = useRef<NodeJS.Timer | null>(null);

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
    if (!!onClose) onClose(index);
  }, [onClose]);

  useEffect(() => {
    if (!!autoHideDuration && open) {
      timerRef.current = setInterval(() => {
        handleClose();
      }, autoHideDuration);
    }

    return () => {
      if (!!timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [autoHideDuration, open]);

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
  maxCount = 10
}) => {
  useEffect(() => {
    if (!!snackbars.length) {
      let shouldCleanup = true;

      for (const sn of snackbars) {
        if (sn.open) {
          shouldCleanup = false;
          break;
        }
      }

      if (shouldCleanup) {
        setSnackbars([]);
      }
    }
  }, [snackbars]);

  const handleSnackbarRemoval = (snackbarIndex: number) => {
    setSnackbars((p) =>
      p.map((sn, i) => {
        if (i === snackbarIndex) {
          const newItem = sn;
          newItem.open = false;
          return newItem;
        }
        return sn;
      })
    );
  };

  const indexedSnackbars = useMemo(() => {
    return snackbars.map((snackbar, index) => ({ ...snackbar, index }));
  }, [snackbars]);

  const lastIndex = indexedSnackbars.length;
  const minIndex = Math.max(0, lastIndex - maxCount);

  return (
    <>
      {!!indexedSnackbars.length && (
        <div className={classNames('idsk-snackbar__stack', className)}>
          {indexedSnackbars.slice(minIndex, lastIndex).map((snackbar) => (
            <Snackbar
              {...snackbar}
              key={snackbar.index}
              index={snackbar.index}
              className={classNames('bottom-0', snackbar.className)}
              fixed={false}
              onClose={(itemIndex) => {
                if (!!snackbar.onClose) {
                  snackbar.onClose();
                }

                if (itemIndex !== undefined) {
                  handleSnackbarRemoval(itemIndex);
                }
              }}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default Snackbar;
