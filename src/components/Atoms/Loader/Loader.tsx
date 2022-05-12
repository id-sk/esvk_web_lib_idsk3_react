import React from 'react';
import { SpinnerIcon } from '../../../svgIcons/Animated';

export interface LoaderProps {
  label?: string;
}

const Loader = (props: LoaderProps) => {
  return (
    <div className="loader">
      <SpinnerIcon className="loader__icon" />
      {props.label && <span className="loader__label">{props.label}</span>}
    </div>
  );
};

export default Loader;
