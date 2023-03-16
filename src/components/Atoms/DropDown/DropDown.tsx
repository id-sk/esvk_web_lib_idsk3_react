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
  id?: string;
  dropDownTitle?: ReactNode;
  arrowIcon?: ReactElement<SVGProps<SVGSVGElement>>;
  optionClassName?: string;
  buttonClassName?: string;
  optionsSide?: 'left' | 'right';
  closeOnOptionClick?: boolean;
}

const DropDown = ({
  id,
  dropDownTitle,
  className = '',
  children,
  arrowIcon = <ArrowDropDownIcon />,
  optionClassName,
  buttonClassName,
  optionsSide = 'right',
  closeOnOptionClick = false,
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
    'idsk-dropdown__options',
    {
      hidden: !opened,
      'idsk-dropdown__options--left': optionsSide === 'left'
    },
    optionClassName
  );
  const wrapperClasses = classNames('idsk-dropdown__wrapper', className);
  const buttonClasses = classNames('idsk-dropdown', buttonClassName);

  const renderedChildren = Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return (
        <li className="idsk-dropdown__option">
          {React.cloneElement(child, {
            onClick: (e: React.MouseEvent) => {
              if (child?.props?.onClick) child.props.onClick(e);
              if (closeOnOptionClick) setOpened(false);
            }
          } as any)}
        </li>
      );
    }
  });

  const renderedIcon = React.cloneElement(arrowIcon, {
    className: classNames('idsk-dropdown__icon', { 'rotate-180': opened })
  });

  return (
    <div ref={containerRef} {...props} className={wrapperClasses}>
      <button
        className={buttonClasses}
        onClick={() => setOpened((p) => !p)}
        id={id}
        aria-expanded={opened}
        aria-controls={id + '-dropdown'}
      >
        <span>{dropDownTitle}</span>
        {renderedIcon}
      </button>
      <ul
        id={id + '-dropdown'}
        className={optionClasses}
        data-testid="dropdown-options"
        onClick={() => setOpened(false)}
      >
        {renderedChildren}
      </ul>
    </div>
  );
};

export default DropDown;
