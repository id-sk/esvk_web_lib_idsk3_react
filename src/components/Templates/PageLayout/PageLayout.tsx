import React, { ReactNode } from 'react';
import classNames from 'classnames';

export interface PageLayoutProps extends React.AllHTMLAttributes<HTMLElement> {
  header: ReactNode;
  heading?: ReactNode;
  footer: ReactNode;
  breadcrumbs?: ReactNode;
  contentClassName?: string;
  informationBanner?: ReactNode;
}

const PageLayout = ({
  header,
  breadcrumbs,
  informationBanner,
  heading,
  children,
  footer,
  className,
  contentClassName,
  ...props
}: PageLayoutProps) => {
  return (
    <div className="page-layout">
      {!!informationBanner && <div>{informationBanner}</div>}
      {header}
      <main className={classNames('page-layout__main', className)} {...props}>
        {!!breadcrumbs && <div className="page-layout__breadcrumbs">{breadcrumbs}</div>}
        {!!heading && <div className="page-layout__heading">{heading}</div>}
        <div className={classNames('page-layout__content', contentClassName)}>{children}</div>
      </main>
      {footer}
    </div>
  );
};

export default PageLayout;
