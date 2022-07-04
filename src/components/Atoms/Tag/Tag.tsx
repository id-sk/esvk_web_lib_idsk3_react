import React, { ReactElement, SVGProps } from 'react';

export interface TagProps {
  label: string;
  leftIcon?: ReactElement<SVGProps<SVGSVGElement>>;
  rightIcon?: ReactElement<SVGProps<SVGSVGElement>>;
}

const Tag = (props: TagProps) => {
  return (
    <div className="tag">
      {props.leftIcon}
      {props.label}
      {props.rightIcon}
    </div>
  );
};

export default Tag;
