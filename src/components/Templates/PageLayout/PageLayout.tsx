import React, { ReactNode } from 'react';

export interface PageLayoutProps extends React.AllHTMLAttributes<HTMLElement> {
  titleSection: ReactNode;
  header: ReactNode;
  footer: ReactNode;
  breadcrumbs: ReactNode;
}

const PageLayout = ({
  children,
  titleSection,
  className = '',
  header,
  footer,
  breadcrumbs,
  ...props
}: PageLayoutProps) => {
  return (
    <div className="page-layout">
      {header}
      <main className={`page-layout__main ${className}`} {...props}>
        {!!breadcrumbs && <div className="page-layout__breadcrumbs">{breadcrumbs}</div>}
        <div className="page-layout__title">{titleSection}</div>
        <div className="page-layout__body">{children}</div>
      </main>
      {footer}
    </div>
  );
};

export default PageLayout;
