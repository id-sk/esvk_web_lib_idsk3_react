import React from 'react';
import classNames from 'classnames';

export interface CardWrapperProps extends React.AllHTMLAttributes<HTMLDivElement> {
  color: string;
  highlighted?: boolean;
  innerClassNames?: string;
}

const CardWrapper = ({
  color,
  highlighted,
  children,
  innerClassNames,
  ...props
}: CardWrapperProps) => {
  const cssClasses: string = classNames(
    'relative shadow-small rounded-[0.625rem] bg-white overflow-hidden px-[0.3125rem] text-body-1'
  );

  return (
    <div className={cssClasses} {...props}>
      <div
        style={{ backgroundColor: color }}
        className="absolute inset-y-0 left-0 w-[0.3125rem] h-full"
      />
      {highlighted && (
        <div
          data-testid="alertDiv"
          className="absolute inset-0 rounded-[0.625rem]"
          style={{ boxShadow: `inset 0 0 0 0.125rem ${color}` }}
        />
      )}
      <div className={innerClassNames}>{children}</div>
    </div>
  );
};

export default CardWrapper;
