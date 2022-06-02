import React from 'react';
import { format } from 'date-fns';

import { CardWrapper, CardWrapperProps } from '../../Atoms';

export interface NotificationCardProps extends Omit<CardWrapperProps, 'innerClassNames'> {
  date: string | number | Date;
  title: string;
  highlighted?: boolean;
  actions?: {
    label: string;
    href?: string;
    onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  }[];
  dateFormatString?: string;
}

const NotificationCard = ({
  title,
  date,
  highlighted,
  children,
  actions = [],
  dateFormatString = 'dd.MM.yyyy',
  ...props
}: NotificationCardProps) => {
  const dateObject = new Date(date);

  return (
    <CardWrapper innerClassNames="notification-card" {...props}>
      <div className="notification-card__header">
        <span className="notification-card__title">
          {highlighted && (
            <span data-testid="unread-alert" className="notification-card__highlight" />
          )}
          {title}
        </span>
        <time dateTime={format(dateObject, dateFormatString)} className="notification-card__date">
          {format(dateObject, dateFormatString)}
        </time>
      </div>
      {children}
      {!!actions.length && (
        <div className="notification-card__footer">
          {actions.map((item, index) => (
            <a
              className="notification-card__link"
              key={index}
              href={!!item.href ? item.href : undefined}
              onClick={!!item.onClick ? item.onClick : undefined}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </CardWrapper>
  );
};

export default NotificationCard;
