import React from 'react';
import { SpinnerIcon } from '../../../svgIcons/Animated';

export interface LoaderProps {
  label?: string;
}

const Loader = (props: LoaderProps) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <SpinnerIcon className="w-14 h-14" />
      {props.label && <span className="text-body mt-2">{props.label}</span>}
    </div>
  );
};

export default Loader;
