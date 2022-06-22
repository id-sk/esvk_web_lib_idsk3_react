import React from 'react';

export interface TagProps {
  label: string;
}

const Tag = (props: TagProps) => {
  return <div className="tag"> {props.label} </div>;
};

export default Tag;
