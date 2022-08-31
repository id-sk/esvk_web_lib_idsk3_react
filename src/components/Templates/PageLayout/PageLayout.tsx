import React, { ReactNode } from 'react';

export interface PageLayoutProps extends React.AllHTMLAttributes<HTMLElement> {
  header: ReactNode;
  heading?: ReactNode;
  footer: ReactNode;
  breadcrumbs?: ReactNode;
}

const PageLayout = ({
  header,
  breadcrumbs,
  heading,
  children,
  footer,
  className = '',
  ...props
}: PageLayoutProps) => {
  return (
    <div className="page-layout">
      {header}
      <main className={`page-layout__main ${className}`} {...props}>
        {!!breadcrumbs && <div className="page-layout__breadcrumbs">{breadcrumbs}</div>}
        {!!heading && <div className="page-layout__heading">{heading}</div>}
        <div className="page-layout__body">{children}</div>
      </main>
      {footer}
    </div>
  );
};

export default PageLayout;
