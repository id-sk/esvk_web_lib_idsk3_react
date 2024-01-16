import React, { useRef, Children, ReactElement, SVGProps, ReactNode } from 'react';
import classNames from 'classnames';

import { ArrowDropDownIcon } from '../../../svgIcons/Navigation';
import { UseDropDownOptions, useDropDown } from '../../../utils';
import BaseButton from '../Button/BaseButton';

export interface DropDownProps extends React.AllHTMLAttributes<HTMLDivElement> {
  id?: string;
  customTrigger?: ReactElement;
  dropDownTitle?: ReactNode;
  arrowIcon?: ReactElement<SVGProps<SVGSVGElement>>;
  optionClassName?: string;
  buttonClassName?: string;
  buttonAriaLabel?: string;
  optionsSide?: 'left' | 'right';
  closeOnOptionClick?: boolean;
  withoutPseudoElement?: boolean;
  hookOptions?: UseDropDownOptions;
}

const DropDown = ({
  id,
  customTrigger,
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
  hookOptions,
  ...props
}: DropDownProps) => {
  const triggerRef = useRef<HTMLButtonElement>(null);
  const optionsRef = useRef<HTMLUListElement>(null);

  const wrapperClasses = classNames('idsk-dropdown__wrapper', className);
  const buttonClasses = classNames('idsk-dropdown', buttonClassName);

  const { isOpen, state, handleTriggerClick } = useDropDown(triggerRef, optionsRef, hookOptions);

  const optionClasses = classNames(
    'idsk-dropdown__options opacity-0',
    {
      hidden: state === 'closed',
      'idsk-dropdown__options--left': optionsSide === 'left',
      'idsk-dropdown__options--up': state === 'up',
      'idsk-dropdown__options--down': state === 'down'
    },
    optionClassName
  );

  const getLabelForPseudoElement = (child: any): string | number | undefined => {
    const chLabel = child?.props?.label;
    const chChildren = child?.props?.children;

    if (!!chLabel && (typeof chLabel === 'string' || typeof chLabel === 'number')) {
      return chLabel;
    }
    if (!!chChildren && (typeof chChildren === 'string' || typeof chChildren === 'number')) {
      return chChildren;
    }
    return undefined;
  };

  const renderedChildren = Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      const label = getLabelForPseudoElement(child);
      const data =
        !withoutPseudoElement && child.type !== 'hr' && !!label
          ? { 'data-pseudolabel': label }
          : undefined;
      return (
        <li className="idsk-dropdown__option idsk-pseudolabel__wrapper" {...data}>
          {React.cloneElement(child, {
            onClick: (e: React.MouseEvent) => {
              if (child?.props?.onClick) child.props.onClick(e);
              if (closeOnOptionClick) handleTriggerClick();
            },
            className: classNames(child.props.className, { absolute: !!data })
          } as any)}
        </li>
      );
    }
  });

  const renderedIcon = React.cloneElement(arrowIcon, {
    className: classNames('idsk-dropdown__icon', { 'rotate-180': isOpen })
  });

  return (
    <div {...props} className={wrapperClasses}>
      {!!customTrigger ? (
        React.cloneElement(customTrigger, {
          ref: triggerRef,
          onClick: handleTriggerClick
        })
      ) : (
        <BaseButton
          ref={triggerRef}
          aria-label={buttonAriaLabel}
          className={buttonClasses}
          onClick={handleTriggerClick}
          id={id}
          aria-expanded={isOpen}
          aria-controls={id + '-dropdown'}
          type="button"
        >
          <span>{dropDownTitle}</span>
          {renderedIcon}
        </BaseButton>
      )}
      <ul
        style={{
          opacity: isOpen ? '100' : '0'
        }}
        ref={optionsRef}
        id={id + '-dropdown'}
        className={optionClasses}
        data-testid="dropdown-options"
      >
        {renderedChildren}
      </ul>
    </div>
  );
};

export default DropDown;
