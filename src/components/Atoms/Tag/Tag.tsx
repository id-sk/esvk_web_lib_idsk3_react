import React, { ReactNode, ReactElement, SVGProps } from 'react';
import classNames from 'classnames';

export interface TagProps extends React.HTMLAttributes<HTMLDivElement> {
  label: ReactNode;
  leftIcon?: ReactElement<SVGProps<SVGSVGElement>>;
  rightIcon?: ReactElement<SVGProps<SVGSVGElement>>;
  variant?: 'default' | 'basic' | 'warning' | 'success' | 'attention';
  disabled?: boolean;
  interaction?: boolean;
  selected?: boolean;
}

const Tag = ({
  leftIcon,
  label,
  rightIcon,
  className,
  disabled = false,
  interaction = false,
  selected = false,
  variant = 'default',
  ...props
}: TagProps) => {
  return (
    <div
      className={classNames(
        'tag',
        {
          'tag--disabled': disabled,
          'tag--with-interactions': interaction && !disabled,
          'tag--default': variant === 'default' && !disabled,
          'tag--basic': variant === 'basic' && !disabled && !interaction,
          'tag--warning': variant === 'warning' && !disabled && !interaction,
          'tag--success': variant === 'success' && !disabled && !interaction,
          'tag--attention': variant === 'attention' && !disabled && !interaction,
          'tag--selected': !disabled && selected
        },
        className
      )}
      {...props}
    >
      {leftIcon}
      {label}
      {rightIcon}
    </div>
  );
};

export default Tag;
