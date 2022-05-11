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
    <div className="flex flex-col min-h-screen">
      {header}
      <main
        className={`pt-[1.875rem] pb-16 tb1:pt-[3.25rem] bg-neutral-100 flex-auto flex flex-col ${className}`}
        {...props}
      >
        <div className="inset-x-0 mx-auto px-5 pb-6 tb1:pb-7 tb1:px-8 dm2:px-40 max-w-[114rem] w-full">
          {titleSection}
        </div>
        <div className="inset-x-0 mx-auto tb1:px-8 dm2:px-40 max-w-[114rem] min-h-full flex-auto w-full">
          {children}
        </div>
      </main>
    </div>
  );
};

export default PrivatePage;
