import React, { ReactNode } from 'react';
import { AvatarCircle } from '../../Atoms';

export interface IdentificationCardProps extends React.AllHTMLAttributes<HTMLDivElement> {
  firstName: string;
  lastName: string;
  fullName: string;
  identification: string;
  children?: ReactNode;
}

const IdentificationCard = ({
  firstName,
  lastName,
  fullName,
  identification,
  children,
  className = '',
  ...props
}: IdentificationCardProps) => {
  return (
    <div className={`idsk-identification-card ${className}`} {...props}>
      <AvatarCircle
        firstName={firstName}
        lastName={lastName}
        fullName={fullName}
        buttonClasses="idsk-identification-card__avatar"
        disabled={true}
      />
      <div className="idsk-identification-card__full-name">{fullName}</div>
      <div className="idsk-identification-card__identification">{identification}</div>
      {children}
    </div>
  );
};
export default IdentificationCard;
