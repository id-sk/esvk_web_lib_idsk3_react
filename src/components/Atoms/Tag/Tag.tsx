import React, { ReactNode, ReactElement, SVGProps } from 'react';
import classNames from 'classnames';

export interface TagProps extends React.HTMLAttributes<HTMLDivElement> {
  label: ReactNode;
  leftIcon?: ReactElement<SVGProps<SVGSVGElement>>;
  rightIcon?: ReactElement<SVGProps<SVGSVGElement>>;
  variant?: 'basic' | 'warning' | 'success' | 'attention';
}

const Tag = ({ leftIcon, label, rightIcon, className, variant, ...props }: TagProps) => {
  return (
    <div
      className={classNames(
        {
          tag: !variant,
          'tag--basic': variant == 'basic',
          'tag--warning': variant == 'warning',
          'tag--success': variant == 'success',
          'tag--attention': variant == 'attention'
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
