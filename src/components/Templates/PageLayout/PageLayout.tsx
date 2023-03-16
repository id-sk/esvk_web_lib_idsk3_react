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
    <div className="idsk-page-layout">
      {!!informationBanner && <div>{informationBanner}</div>}
      {header}
      <main className={classNames('idsk-page-layout__main', className)} {...props}>
        {!!breadcrumbs && <div className="idsk-page-layout__breadcrumbs">{breadcrumbs}</div>}
        {!!heading && <div className="idsk-page-layout__heading">{heading}</div>}
        <div className={classNames('idsk-page-layout__content', contentClassName)}>{children}</div>
      </main>
      {footer}
    </div>
  );
};

export default PageLayout;
