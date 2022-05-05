import React from 'react';
import classNames from 'classnames';

export interface CardWrapperProps extends React.AllHTMLAttributes<HTMLDivElement> {
  color?: string;
  innerClassNames?: string;
}

const CardWrapper = ({
  color,
  children,
  innerClassNames,
  className,
  ...props
}: CardWrapperProps) => {
  const cssClasses: string = classNames(
    'relative rounded-[0.625rem] bg-white overflow-hidden text-body-1 border border-neutral-300',
    { 'px-[0.3125rem]': !!color },
    className
  );

  return (
    <div className={cssClasses} {...props}>
      {!!color && (
        <div
          style={{ backgroundColor: color }}
          className="absolute inset-y-0 left-0 w-[0.3125rem] h-full"
        />
      )}
      <div className={innerClassNames}>{children}</div>
    </div>
  );
};

export default CardWrapper;
