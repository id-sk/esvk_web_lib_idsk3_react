import React, { ReactElement, SVGProps } from 'react';

export interface ButtonProps {
  label: string;
  icon?: ReactElement<SVGProps<SVGSVGElement>>;
}

const Button = (props: ButtonProps) => {
  const icon = props.icon ? React.cloneElement(props.icon, { className: 'w-5 h-5' }) : null;

  return (
    <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 shadow-medium">
      {icon}
      {props.label}
    </button>
  );
};

export default Button;
