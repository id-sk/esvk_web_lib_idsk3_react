import React from 'react';
import classNames from 'classnames';

export interface AvatarCircleProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  firstName: string;
  lastName: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

const AvatarCircle = ({
  firstName,
  lastName,
  onClick = () => {},
  className = '',
  ...props
}: AvatarCircleProps) => {
  return (
    <button className={classNames('avatar-circle', className)} onClick={onClick} {...props}>
      {firstName?.slice(0, 1) + lastName?.slice(0, 1)}
    </button>
  );
};

export default AvatarCircle;
