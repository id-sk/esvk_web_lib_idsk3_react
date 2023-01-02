import React, { useState, useRef, useEffect, ReactElement, SVGProps, ReactNode } from 'react';
import classNames from 'classnames';
import KeyBoardArrowDownIcon from '../../../svgIcons/Hardware/KeyboardArrowDown';

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

const PaginationDrop = ({
  title: dropDownTitle,
  arrowIcon = <KeyBoardArrowDownIcon />,
  optionClassName,
  buttonClassName,
  caption,
  id,
  ...props
}: PaginationDropProps) => {
  const [opened, setOpened] = useState<boolean>(false);
  const [dropTitle, setDropTitle] = useState(dropDownTitle);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent | null) {
      if (
        event?.target instanceof Node &&
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setOpened(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [containerRef]);

  const optionClasses = classNames(
    'pagination-drop__options',
    {
      hidden: !opened
    },
    optionClassName
  );
  const wrapperClasses = classNames('dropdown__wrapper');
  const buttonClasses = classNames('pagination-drop__button', buttonClassName);
  const renderedIcon = React.cloneElement(arrowIcon, {
    className: classNames('pagination-drop__icon', { 'rotate-180': opened })
  });
  return (
    <div className="pagination-drop">
      {!!caption && <p className="pagination__caption">{caption}</p>}
      <div ref={containerRef} className={wrapperClasses} id={id}>
        <button
          id={id ? id + '-button' : undefined}
          className={buttonClasses}
          onClick={() => setOpened((p) => !p)}
        >
          <span className="pagination-drop__title">{dropTitle}</span>
          {renderedIcon}
        </button>
        <ul className={optionClasses} data-testid="pagination-drop__options">
          {props.items.map((item) => (
            <li
              key={item.key}
              id={id ? id + '-option-' + item.key : undefined}
              className={'pagination-drop__option'}
              onClick={() => {
                props.onClick(item);
                setOpened(false);
                setDropTitle(item.label);
              }}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PaginationDrop;
