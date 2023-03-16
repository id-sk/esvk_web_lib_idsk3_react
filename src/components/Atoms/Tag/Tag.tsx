import React, { ReactNode, ReactElement, SVGProps } from 'react';
import classNames from 'classnames';

export interface TagProps extends React.HTMLAttributes<HTMLDivElement> {
  label: ReactNode;
  leftIcon?: ReactElement<SVGProps<SVGSVGElement>>;
  rightIcon?: ReactElement<SVGProps<SVGSVGElement>>;
  variant?: 'default' | 'basic' | 'warning' | 'success' | 'attention';
  disabled?: boolean;
  size?: 'small' | 'medium';
  interaction?: boolean;
  selected?: boolean;
}

const Tag = ({
  leftIcon,
  label,
  rightIcon,
  className,
  size = 'medium',
  disabled = false,
  interaction = false,
  selected = false,
  variant = 'default',
  ...props
}: TagProps) => {
  return (
    <div
      className={classNames(
        'idsk-tag',
        {
          'idsk-tag--disabled': disabled,
          'idsk-tag--with-interactions': interaction && !disabled,
          'idsk-tag--default': variant === 'default' && !disabled,
          'idsk-tag--basic': variant === 'basic' && !disabled && !interaction,
          'idsk-tag--warning': variant === 'warning' && !disabled && !interaction,
          'idsk-tag--success': variant === 'success' && !disabled && !interaction,
          'idsk-tag--attention': variant === 'attention' && !disabled && !interaction,
          'idsk-tag--selected': !disabled && selected,
          'idsk-tag--small': size == 'small'
        },
        className
      )}
      tabIndex={interaction ? 0 : -1}
      {...props}
    >
      {leftIcon}
      {label}
      {rightIcon}
    </div>
  );
};

export default Tag;
