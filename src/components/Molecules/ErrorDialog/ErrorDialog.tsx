import React, { ReactNode } from 'react';
import classNames from 'classnames';
import ErrorImage from '../../../svgImages/Logos/ErrorImg';

export interface ErrorDialogProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  opened: boolean;
  primaryButton?: ReactNode;
  secondaryButton?: ReactNode;
}

const ErrorDialog = ({
  opened,
  id,
  className,
  title,
  children,
  primaryButton,
  secondaryButton
}: ErrorDialogProps) => {
  const dialogClasses = classNames(
    'dialog-screen',
    {
      'dialog-screen--hidden': !opened
    },
    className
  );

  return (
    <div className={dialogClasses} id={id}>
      <div className="dialog-wrapper">
        <div className="error-dialog">
          <ErrorImage className="error-dialog__img"></ErrorImage>
          <div className="error-dialog__title">{title}</div>
          <div className="error-dialog__children">{children}</div>
          <div className="error-dialog__buttons">
            {primaryButton}
            {secondaryButton}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorDialog;
