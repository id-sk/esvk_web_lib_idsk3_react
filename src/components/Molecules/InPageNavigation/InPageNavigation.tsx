import React, { ReactElement } from 'react';
import classNames from 'classnames';
import { InPageNavigationLinkProps } from './InPageNavigationLink';

export interface InPageNavigationProps extends React.AllHTMLAttributes<HTMLElement> {
  children?: ReactElement<InPageNavigationLinkProps> | ReactElement<InPageNavigationLinkProps>[];
  title?: string;
}

const InPageNavigation = ({ children, className, title = '', ...props }: InPageNavigationProps) => {
  const inPageNavigationClasses = classNames('in-page-navigation', className);

  return (
    <div className="in-page-navigation-desktop">
      <div className={inPageNavigationClasses} {...props}>
        {!!title && <h3>{title}</h3>}
        {children}
      </div>
    </div>
  );
};

export default InPageNavigation;
