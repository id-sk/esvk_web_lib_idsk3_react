import React, { ReactNode, ReactElement, SVGProps } from 'react';
import classNames from 'classnames';

export interface TagProps extends React.HTMLAttributes<HTMLDivElement> {
  label: ReactNode;
  leftIcon?: ReactElement<SVGProps<SVGSVGElement>>;
  rightIcon?: ReactElement<SVGProps<SVGSVGElement>>;
}

const Tag = ({ leftIcon, label, rightIcon, className, ...props }: TagProps) => {
  return (
    <div className={classNames('tag', className)} {...props}>
      {leftIcon}
      {label}
      {rightIcon}
    </div>
  );
};

export default Tag;
