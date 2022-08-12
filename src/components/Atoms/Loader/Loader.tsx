import React from 'react';
import { SpinnerIcon } from '../../../svgIcons/Animated';

export interface LoaderProps extends React.AllHTMLAttributes<HTMLDivElement> {
  label?: string;
}

const Loader = ({ label, ...props }: LoaderProps) => {
  return (
    <div className="loader" {...props}>
      <SpinnerIcon className="loader__icon" />
      {label && <span className="loader__label">{label}</span>}
    </div>
  );
};

export default Loader;
