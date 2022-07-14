import React, { ReactNode } from 'react';
import { AvatarCircle } from '../../Atoms';

export interface IdentificationCardProps {
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
  ...props
}: IdentificationCardProps) => {
  return (
    <div className="identification-card" {...props}>
      <AvatarCircle firstName={firstName} lastName={lastName} className="h-12 w-12 mb-5" />
      <div className="identification-card__full-name">{fullName}</div>
      <div className="identification-card__identification">{identification}</div>
      {children}
    </div>
  );
};
export default IdentificationCard;
