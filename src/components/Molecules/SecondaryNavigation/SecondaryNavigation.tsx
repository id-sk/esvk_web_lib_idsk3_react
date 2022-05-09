import React, { useState, ReactElement } from 'react';
import classNames from 'classnames';

import { DropDown } from '../../Atoms';
import { ArrowDropDownIcon } from '../../../svgIcons/Navigation';

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
    'py-2.5 text-white text-body-1 px-5 tb1:px-8 dm2:px-40 max-w-[114rem] relative inset-x-0 mx-auto',
    {
      hidden: !opened
    }
  );
  const iconClasses = classNames({ 'rotate-180': opened });

  return (
    <>
      <div className="bg-blue-600 text-white" {...props}>
        <div className="h-[1.875rem] tb1:h-10 px-5 tb1:px-8 dm2:px-40 max-w-[114rem] relative inset-x-0 mx-auto flex items-center z-10">
          <div className="caption tb1:text-body-1">
            {title}{' '}
            {!!titleButton && (
              <button
                className="hover:underline font-bold inline-flex items-center"
                onClick={() => setOpened((p) => !p)}
              >
                {titleButton}{' '}
                <ArrowDropDownIcon width="1.5rem" height="1.5rem" className={iconClasses} />
              </button>
            )}
          </div>
          <div className="flex-auto" />
          <DropDown dropDownTitle={dropDownTitle} className="caption tb1:text-body-1">
            {dropDownOptions.length &&
              dropDownOptions.map((item, index) => React.cloneElement(item, { key: index }))}
          </DropDown>
        </div>
      </div>
      <div className="bg-blue-600">
        <div className={extendedClasses} data-testid="secnav-children">
          {children}
        </div>
      </div>
    </>
  );
};

export default SecondaryNavigation;
