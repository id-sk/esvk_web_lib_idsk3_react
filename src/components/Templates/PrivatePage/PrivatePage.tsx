import React, { ReactNode } from 'react';

export interface PrivatePageProps extends React.AllHTMLAttributes<HTMLElement> {
  header: ReactNode;
  titleSection?: ReactNode;
}

const PrivatePage = ({ children, header, titleSection, ...props }: PrivatePageProps) => {
  return (
    <div className="bg-neutral-200" {...props}>
      {header}
      <main className="pt-[7.75rem] pb-16 tb1:pt-48 min-h-screen">
        <div className="inset-x-0 mx-auto px-5 pb-6 tb1:pb-7 tb1:px-8 dm1:px-5 dl:px-4 max-w-6xl dl:max-w-[96rem]">
          {titleSection}
        </div>
        <div className="inset-x-0 mx-auto tb1:px-8 dm1:px-5 dl:px-4 max-w-6xl dl:max-w-[96rem]">
          {children}
        </div>
      </main>
    </div>
  );
};

export default PrivatePage;
