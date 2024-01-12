import React, { useState, useRef, ReactElement, SVGProps, ReactNode } from 'react';
import classNames from 'classnames';
import KeyBoardArrowDownIcon from '../../../svgIcons/Hardware/KeyboardArrowDown';
import BaseButton from '../Button/BaseButton';
import { useClickOutside } from '../../../utils';
import useDropdownDirection from '../../../utils/useDropdownDirection';

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
  const [opened, setOpened] = useState<boolean>(false);
  const [dropTitle, setDropTitle] = useState(title);
  const containerRef = useRef<HTMLDivElement>(null);
  const optionsRef = useRef<HTMLUListElement>(null);

  useClickOutside(() => setOpened(false), containerRef);
  const direction = useDropdownDirection(opened, containerRef, optionsRef);

  const optionClasses = classNames(
    'idsk-pagination-drop__options',
    {
      hidden: !opened,
      'idsk-dropdown__options--up': direction === 'up',
      'idsk-dropdown__options--down': direction === 'down'
    },
    optionClassName
  );
  const wrapperClasses = classNames('idsk-dropdown__wrapper');
  const buttonClasses = classNames('idsk-pagination-drop__button', buttonClassName);
  const renderedIcon = React.cloneElement(arrowIcon, {
    className: classNames('idsk-pagination-drop__icon', { 'rotate-180': opened })
  });

  const dropdownButtonId = id ? id + '-button' : 'pagination-dropdown-button';

  return (
    <div className="idsk-pagination-drop">
      {!!caption && (
        <label className="idsk-pagination__caption" htmlFor={dropdownButtonId}>
          {caption}
        </label>
      )}
      <div ref={containerRef} className={wrapperClasses} id={id}>
        <BaseButton
          id={dropdownButtonId}
          className={buttonClasses}
          onClick={() => setOpened((p) => !p)}
        >
          <span className="idsk-pagination-drop__title">{dropTitle}</span>
          {renderedIcon}
        </BaseButton>
        <ul className={optionClasses} ref={optionsRef} data-testid="idsk-pagination-drop__options">
          {items.map((item, index) => (
            <li key={item.key}>
              <BaseButton
                id={id ? id + '-option-' + item.key : `pagination-dropdown-option-${index + 1}}`}
                className={'idsk-pagination-drop__option'}
                ariaLabel={item.label?.toString()}
                onClick={() => {
                  onClick(item);
                  setOpened(false);
                  setDropTitle(item.label);
                }}
              >
                {item.label}
              </BaseButton>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
