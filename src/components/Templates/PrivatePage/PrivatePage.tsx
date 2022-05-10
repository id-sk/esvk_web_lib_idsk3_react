import React, { ReactNode } from 'react';

export interface PrivatePageProps extends React.AllHTMLAttributes<HTMLElement> {
  titleSection: ReactNode;
}

const PrivatePage = ({ children, titleSection, className, ...props }: PrivatePageProps) => {
  return (
    <main
      className={`pt-[1.875rem] pb-16 tb1:pt-[3.25rem] min-h-screen bg-neutral-100 ${className}`}
      {...props}
    >
      <div className="inset-x-0 mx-auto px-5 pb-6 tb1:pb-7 tb1:px-8 dm2:px-40 max-w-[114rem]">
        {titleSection}
      </div>
      <div className="inset-x-0 mx-auto tb1:px-8 dm2:px-40 max-w-[114rem]">{children}</div>
    </main>
  );
};

export default PrivatePage;
