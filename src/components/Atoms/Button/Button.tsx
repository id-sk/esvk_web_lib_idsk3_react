import React from 'react';

export interface ButtonProps {
  label: string;
}

const Button = (props: ButtonProps) => {
  return (
    <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
      {props.label}
    </button>
  );
};

export default Button;
