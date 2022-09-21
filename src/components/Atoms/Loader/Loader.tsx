import classNames from 'classnames';
import React from 'react';
import { SpinnerIcon } from '../../../svgIcons/Animated';

export interface LoaderProps extends React.AllHTMLAttributes<HTMLDivElement> {
  label?: string;
  spinnerClassName?: string;
}

const Loader = ({ label, spinnerClassName, ...props }: LoaderProps) => {
  const spinnerClass = classNames('loader__icon', spinnerClassName);

  return (
    <div className="loader" {...props}>
      <SpinnerIcon className={spinnerClass} />
      {label && <span className="loader__label">{label}</span>}
    </div>
  );
};

export default Loader;
