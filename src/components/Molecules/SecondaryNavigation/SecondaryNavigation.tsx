import React, { useState, ReactElement } from 'react';
import classNames from 'classnames';

import { DropDown } from '../../Atoms';

export interface SecondaryNavProps extends React.AllHTMLAttributes<HTMLDivElement> {
  title?: string;
  titleButton?: string;
  dropDownTitle?: string;
  dropDownOptions?: ReactElement[];
}

const SecondaryNavigation = ({
  children,
  title,
  titleButton,
  dropDownTitle,
  dropDownOptions = [],
  ...props
}: SecondaryNavProps) => {
  const [opened, setOpened] = useState<boolean>(false);

  const extendedClasses = classNames(
    'px-5 py-2.5 tb1:px-[1.875rem] dl:px-4 bg-blue-600 text-white text-body-1',
    { hidden: !opened }
  );

  return (
    <>
      <div
        className="h-[1.875rem] px-5 bg-blue-600 text-white flex items-center tb1:h-10 tb1:px-[1.875rem] dl:px-4"
        {...props}
      >
        <div className="caption tb1:text-body-1">
          {title}{' '}
          <strong className="cursor-pointer hover:underline" onClick={() => setOpened((p) => !p)}>
            {titleButton}
          </strong>
        </div>
        <div className="flex-auto" />
        <DropDown title={dropDownTitle}>
          {dropDownOptions.length &&
            dropDownOptions.map((item, index) => React.cloneElement(item, { key: index }))}
        </DropDown>
      </div>
      <div className={extendedClasses} data-testid="secnav-children">
        {children}
      </div>
    </>
  );
};

export default SecondaryNavigation;
