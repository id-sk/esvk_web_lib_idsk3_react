import React, { useState, useRef, Children, ReactElement, SVGProps, ReactNode } from 'react';
import classNames from 'classnames';

import { ArrowDropDownIcon } from '../../../svgIcons/Navigation';
import { useClickOutside } from '../../../utils';
import BaseButton from '../Button/BaseButton';
import useDropdownDirection from '../../../utils/useDropdownDirection';

export interface DropDownProps extends React.AllHTMLAttributes<HTMLDivElement> {
  id?: string;
  dropDownTitle?: ReactNode;
  arrowIcon?: ReactElement<SVGProps<SVGSVGElement>>;
  optionClassName?: string;
  buttonClassName?: string;
  buttonAriaLabel?: string;
  optionsSide?: 'left' | 'right';
  closeOnOptionClick?: boolean;
  withoutPseudoElement?: boolean;
}

const DropDown = ({
  id,
  dropDownTitle,
  className = '',
  children,
  arrowIcon = <ArrowDropDownIcon />,
  optionClassName,
  buttonClassName,
  buttonAriaLabel,
  optionsSide = 'right',
  closeOnOptionClick = false,
  withoutPseudoElement = false,
  ...props
}: DropDownProps) => {
  const [opened, setOpened] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const optionsRef = useRef<HTMLUListElement>(null);

  const direction = useDropdownDirection(opened, containerRef, optionsRef);

  useClickOutside(() => {
    setOpened(false);
  }, containerRef);

  const optionClasses = classNames(
    'idsk-dropdown__options',
    {
      hidden: !opened,
      'idsk-dropdown__options--left': optionsSide === 'left',
      'idsk-dropdown__options--up': direction === 'up',
      'idsk-dropdown__options--down': direction === 'down'
    },
    optionClassName
  );
  const wrapperClasses = classNames('idsk-dropdown__wrapper', className);
  const buttonClasses = classNames('idsk-dropdown', buttonClassName);

  const renderedChildren = Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      const label = child.props.label || child.props.children;
      const data =
        !withoutPseudoElement && child.type !== 'hr' && !!label
          ? { 'data-pseudolabel': label }
          : {};
      console.log(child.type);
      return (
        <li className="idsk-dropdown__option idsk-pseudolabel__wrapper" {...data}>
          {React.cloneElement(child, {
            onClick: (e: React.MouseEvent) => {
              if (child?.props?.onClick) child.props.onClick(e);
              if (closeOnOptionClick) setOpened(false);
            },
            className: classNames(child.props.className, 'absolute')
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
      <BaseButton
        aria-label={buttonAriaLabel}
        className={buttonClasses}
        onClick={() => setOpened((p) => !p)}
        id={id}
        aria-expanded={opened}
        aria-controls={id + '-dropdown'}
        type="button"
      >
        <span>{dropDownTitle}</span>
        {renderedIcon}
      </BaseButton>
      <ul
        ref={optionsRef}
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
