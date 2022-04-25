import React from 'react';
import classNames from 'classnames';

import { CloseIcon, ArrowForwardIcon } from '../../Icons/Navigation';

export interface ModalSideBarProps extends React.AllHTMLAttributes<HTMLDivElement> {
  opened: boolean;
  toggleOpened: React.Dispatch<React.SetStateAction<boolean>>;
  heading: string;
  footerButtonLabel?: string;
  footerButtonHref?: string;
  footerButtonOnClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

const ModalSideBar = ({
  opened,
  toggleOpened,
  heading,
  footerButtonLabel,
  footerButtonHref,
  footerButtonOnClick,
  children,
  ...props
}: ModalSideBarProps) => {
  const shadowClasses = classNames('fixed z-50 inset-0 bg-neutral-500/50 duration-500', {
    'invisible opacity-0': !opened,
    'visible opacity-100': opened
  });
  const sidebarClasses = classNames(
    'fixed z-50 inset-y-0 w-96 max-w-full max-h-full flex flex-col bg-white right-0 duration-500 overflow-hidden',
    {
      '-right-96 shadow-none': !opened,
      'right-0 shadow-dialog': opened
    }
  );

  return (
    <>
      <div
        className={shadowClasses}
        onClick={() => toggleOpened(false)}
        data-testid="sidebar-shadow"
      />
      <div className={sidebarClasses} {...props}>
        <div className="min-h-[1.875rem] tb1:min-h-[2.5rem] w-full bg-blue-600" />
        <div className="px-5 py-8 border-b border-neutral-300 flex items-center">
          <h3>{heading}</h3>
          <div className="flex-auto" />
          <button
            className="border h-8 w-8 rounded-md flex items-center justify-center"
            onClick={() => toggleOpened(false)}
          >
            <CloseIcon width="1.25rem" height="1.25rem" />
          </button>
        </div>
        <div className="flex-auto" />
        <div className="flex-initial overflow-auto">
          <div className="px-5 ">{children}</div>
        </div>
        {!!footerButtonLabel && (
          <a
            className="bg-primary text-body-1 font-bold text-white p-3 flex items-center justify-center gap-1"
            href={!!footerButtonHref ? footerButtonHref : undefined}
            onClick={!!footerButtonOnClick ? footerButtonOnClick : undefined}
          >
            {footerButtonLabel} <ArrowForwardIcon width="1.25rem" height="1.25rem" />
          </a>
        )}
      </div>
    </>
  );
};

export default ModalSideBar;
