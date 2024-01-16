import React, { useState, ReactElement, SVGProps, ReactNode } from 'react';
import classNames from 'classnames';
import KeyBoardArrowDownIcon from '../../../svgIcons/Hardware/KeyboardArrowDown';
import BaseButton from '../Button/BaseButton';
import DropDown from '../DropDown';

type DropDownItem = {
  label: ReactNode;
  key: string;
};

export interface PaginationDropProps {
  title?: ReactNode;
  arrowIcon?: ReactElement<SVGProps<SVGSVGElement>>;
  optionClassName?: string;
  buttonClassName?: string;
  items: DropDownItem[];
  onClick: (item: DropDownItem) => void;
  className?: string;
  caption?: ReactNode;
  id?: string;
  selected?: boolean;
}

export const PaginationDrop = ({
  title,
  arrowIcon = <KeyBoardArrowDownIcon />,
  optionClassName,
  buttonClassName,
  caption,
  id,
  onClick,
  items
}: PaginationDropProps) => {
  const [dropTitle, setDropTitle] = useState(title);
  const [isOpen, setIsOpen] = useState(false);

  const dropdownButtonId = id ? id + '-button' : 'pagination-dropdown-button';

  return (
    <div className="idsk-pagination-drop">
      {!!caption && (
        <label className="idsk-pagination__caption" htmlFor={dropdownButtonId}>
          {caption}
        </label>
      )}

      <DropDown
        id={id}
        customTrigger={
          <BaseButton
            id={dropdownButtonId}
            className={classNames('idsk-pagination-drop__button', buttonClassName)}
          >
            <span className="idsk-pagination-drop__title">{dropTitle}</span>
            {React.cloneElement(arrowIcon, {
              className: classNames('idsk-pagination-drop__icon', { 'rotate-180': isOpen })
            })}
          </BaseButton>
        }
        arrowIcon={<></>}
        optionClassName={classNames('idsk-pagination-drop__options', optionClassName)}
        hookOptions={{
          onTriggered: (opened) => setIsOpen(opened)
        }}
      >
        {items.map((item, index) => (
          <BaseButton
            key={item.key}
            id={id ? id + '-option-' + item.key : `pagination-dropdown-option-${index + 1}}`}
            className="idsk-pagination-drop__option text-center"
            ariaLabel={item.label?.toString()}
            onClick={() => {
              onClick(item);
              setDropTitle(item.label);
            }}
          >
            {item.label}
          </BaseButton>
        ))}
      </DropDown>
    </div>
  );
};
