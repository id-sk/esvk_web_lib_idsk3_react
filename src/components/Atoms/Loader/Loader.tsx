import React from 'react';
import { Spinner } from '../../Icons/Animated';

export interface LoaderProps {
  label?: string;
}

const Loader = (props: LoaderProps) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Spinner className="w-14 h-14" />
      {props.label && <span className="text-body mt-2">{props.label}</span>}
    </div>
  );
};

export default Loader;
