import React, { Children, ReactNode } from 'react';

export interface SignpostProps extends React.AllHTMLAttributes<HTMLDivElement> {
  socialIcon?: ReactNode;
  icon?: ReactNode;
  titleIcon?: ReactNode;
  title: string;
  arrowIcon?: ReactNode;
  inGroup?: boolean;
  onClick: () => void;
}

const noBorderClass =
  'signpost flex justify-between p-5 border-b border-neutral-100 cursor-pointer last:border-none';
const borderClass =
  'signpost flex justify-between bg-white p-5  border border-neutral-100 rounded-lg cursor-pointer';

const Signpost = (props: SignpostProps) => {
  return (
    <div className={props.inGroup ? noBorderClass : borderClass} onClick={props.onClick}>
      <div className="container flex w-full">
        {!!props.socialIcon && (
          <div className="text-blue-500 text-3xl mr-5 pt-1">{props.socialIcon}</div>
        )}
        <div className="title-children">
          <div className="text-blue-400 text-3xl">{props.icon}</div>
          <div className="flex items-center text-blue-400 underline font-bold text-lg">
            {!!props.titleIcon && <div className="text-3xl mr-2">{props.titleIcon}</div>}
            {props.title}
          </div>
          <div className="text-base">{props.children}</div>
        </div>
      </div>
      <div className="font-bold text-xl ml-4">{props.arrowIcon}</div>
    </div>
  );
};

export function SignpostsGroup({ children }: React.AllHTMLAttributes<HTMLDivElement>) {
  const renderedChildren = Children.map<ReactNode, ReactNode>(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        inGroup: true
      });
    }
  });
  return (
    <div className="border border-neutral-100 rounded-lg overflow-hidden">{renderedChildren}</div>
  );
}

export default Signpost;
