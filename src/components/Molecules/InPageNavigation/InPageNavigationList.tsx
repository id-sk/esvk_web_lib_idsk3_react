import React, { ReactElement } from 'react';
import { InPageNavigationLinkProps } from './InPageNavigationLink';
import classNames from 'classnames';

export interface InPageNavigationListProps extends React.AllHTMLAttributes<HTMLElement> {
  children?: ReactElement<InPageNavigationLinkProps> | ReactElement<InPageNavigationLinkProps>[];
  subtitle?: string;
}

const InPageNavigationList = ({
  children,
  className,
  subtitle = '',
  ...props
}: InPageNavigationListProps) => {
  return (
    <nav className={classNames('in-page-navigation__list', className)} {...props}>
      {!!subtitle && <span className="in-page-navigation__subtitle">{subtitle}</span>}
      {children}
    </nav>
  );
};

export default InPageNavigationList;
