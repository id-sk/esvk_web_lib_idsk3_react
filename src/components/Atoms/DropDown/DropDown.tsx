import React, {
  useState,
  useRef,
  Children,
  useEffect,
  ReactElement,
  SVGProps,
  ReactNode
} from 'react';
import classNames from 'classnames';

import { ArrowDropDownIcon } from '../../../svgIcons/Navigation';

export interface DropDownProps extends React.AllHTMLAttributes<HTMLDivElement> {
  dropDownTitle?: ReactNode;
  arrowIcon?: ReactElement<SVGProps<SVGSVGElement>>;
  optionClassName?: string;
  buttonClassName?: string;
  optionsSide?: 'left' | 'right';
  buttonId?: string;
}

const DropDown = ({
  dropDownTitle,
  className = '',
  children,
  arrowIcon = <ArrowDropDownIcon />,
  optionClassName,
  buttonClassName,
  optionsSide = 'right',
  buttonId,
  ...props
}: DropDownProps) => {
  const [opened, setOpened] = useState<boolean>(false);

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
    'dropdown__options',
    {
      hidden: !opened,
      'dropdown__options--left': optionsSide === 'left'
    },
    optionClassName
  );
  const wrapperClasses = classNames('dropdown__wrapper', className);
  const buttonClasses = classNames('dropdown', buttonClassName);

  const renderedChildren = Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return <li className="dropdown__option">{child}</li>;
    }
  });

  const renderedIcon = React.cloneElement(arrowIcon, {
    className: classNames('dropdown__icon', { 'rotate-180': opened })
  });

  return (
    <div ref={containerRef} {...props} className={wrapperClasses}>
      <button className={buttonClasses} onClick={() => setOpened((p) => !p)} id={buttonId}>
        <span>{dropDownTitle}</span>
        {renderedIcon}
      </button>
      <ul className={optionClasses} data-testid="dropdown-options">
        {renderedChildren}
      </ul>
    </div>
  );
};

export default DropDown;
