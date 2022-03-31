import React from 'react';

import { CardWrapper, CardWrapperProps } from '../../Atoms';

export interface NotificationCardProps extends Omit<CardWrapperProps, 'innerClassNames'> {
  date: string | number | Date;
  title: string;
  actions?: {
    label: string;
    href?: string;
    onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  }[];
}

const NotificationCard = ({
  title,
  date,
  color,
  highlighted,
  children,
  actions = [],
  ...props
}: NotificationCardProps) => {
  const dateObject = new Date(date);

  return (
    <CardWrapper color={color} highlighted={highlighted} innerClassNames="p-5" {...props}>
      <div className="pb-1 flex items-start justify-between">
        <span className="text-body-1 font-bold">{title}</span>
        <time dateTime={dateObject.toISOString()} className="caption text-neutral-800">
          {dateObject.toLocaleDateString()}
        </time>
      </div>
      {children}
      {!!actions.length && (
        <div className="pt-2.5 flex gap-4">
          {actions.map((item, index) => (
            <a
              className="link-s"
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
