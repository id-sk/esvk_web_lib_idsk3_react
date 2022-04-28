import React from 'react';

import { MenuIcon, CloseIcon } from '../../../svgIcons/Navigation';

export interface MenuButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  opened: boolean;
  toggleOpened: React.MouseEventHandler<HTMLButtonElement> | undefined;
  openedTitle: string;
  closedTitle: string;
}

const MenuButton = ({
  opened,
  toggleOpened,
  closedTitle,
  openedTitle,
  className,
  ...props
}: MenuButtonProps) => {
  return (
    <button
      className={`px-2.5 border rounded-md h-9 tb1:h-10 flex items-center gap-3 text-body text-blue-600 font-bold ${className}`}
      onClick={toggleOpened}
      {...props}
    >
      <span>{opened ? openedTitle : closedTitle}</span>{' '}
      {opened ? <CloseIcon width="26px" height="26px" /> : <MenuIcon width="26px" height="26px" />}
    </button>
  );
};

export default MenuButton;
