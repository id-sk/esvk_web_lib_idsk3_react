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
    'card-wrapper',
    { 'card-wrapper--with-color': !!color },
    className
  );

  return (
    <div className={cssClasses} {...props}>
      {!!color && <div style={{ backgroundColor: color }} className="card-wrapper__color-strip" />}
      <div className={innerClassNames}>{children}</div>
    </div>
  );
};

export default CardWrapper;
