import React from 'react';

export interface AvatarCircleProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  firstName: string;
  lastName: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

const AvatarCircle = ({
  firstName,
  lastName,
  onClick = () => {},
  className,
  ...props
}: AvatarCircleProps) => {
  return (
    <button
      className={`flex items-center justify-center bg-black rounded-full h-10 w-10 text-white text-body-1 ${className}`}
      onClick={onClick}
      {...props}
    >
      {firstName?.slice(0, 1) + lastName?.slice(0, 1)}
    </button>
  );
};

export default AvatarCircle;
