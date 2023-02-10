import React, { ReactNode } from 'react';
import classNames from 'classnames';
import ErrorImage from '../../../svgImages/Logos/ErrorImg';
import Dialog from '../Dialog';
import { Loader } from '../../Atoms';

export interface ErrorDialogProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  opened: boolean;
  img?: ReactNode;
  isLoading?: boolean;
  subtitle?: ReactNode;
}

const ErrorDialog = ({
  opened,
  id,
  className,
  title,
  subtitle,
  children,
  isLoading = false,
  img = <ErrorImage className="error-dialog__img" />
}: ErrorDialogProps) => {
  const childrenClasses = classNames('error-dialog__children', {
    'error-dialog__children-loading': isLoading
  });
  return (
    <Dialog opened={opened} id={id} className={className}>
      <div className="error-dialog">
        <div className="error-dialog__img-wrapper">{img}</div>
        {!!isLoading ? (
          <Loader className="error-dialog__loader" />
        ) : (
          <div className="error-dialog__text-wrapper ">
            {title && <h2 className="error-dialog__title">{title}</h2>}
            {subtitle && <p className="error-dialog__subtitle">{subtitle}</p>}
          </div>
        )}
        <div className={childrenClasses}>{children}</div>
      </div>
    </Dialog>
  );
};

export default ErrorDialog;
