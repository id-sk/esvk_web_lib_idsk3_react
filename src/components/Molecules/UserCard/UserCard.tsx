import React, { ReactNode } from 'react';

import { CardWrapper, CardWrapperProps } from '../../Atoms';

export interface UserCardProps extends Omit<CardWrapperProps, 'innerClassNames'> {
  title?: string;
  name: string;
  button?: ReactNode;
}

const UserCard = ({ title = '', name, button, children, ...props }: UserCardProps) => {
  return (
    <CardWrapper innerClassNames="idsk-user-card" {...props}>
      <div className="idsk-user-card__body">
        <span className="idsk-user-card__title">{title}</span>
        <span className="idsk-user-card__name">{name}</span>
        {children}
      </div>
      {!!button && <div className="idsk-user-card__button">{button}</div>}
    </CardWrapper>
  );
};

export default UserCard;
