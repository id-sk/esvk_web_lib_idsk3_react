import React, { ReactNode } from 'react';

export interface PrivatePageProps extends React.AllHTMLAttributes<HTMLElement> {
  titleSection: ReactNode;
  header: ReactNode;
}

const PrivatePage = ({
  children,
  titleSection,
  className = '',
  header,
  ...props
}: PrivatePageProps) => {
  return (
    <div className="private-page">
      {header}
      <main className={`private-page__main ${className}`} {...props}>
        <div className="private-page__title">{titleSection}</div>
        <div className="private-page__body">{children}</div>
      </main>
    </div>
  );
};

export default PrivatePage;
