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
    <CardWrapper innerClassNames="p-5 pl-10" {...props}>
      <div className="pb-1 flex items-start justify-between">
        <span className="text-body-1 font-bold relative">
          {highlighted && (
            <span
              data-testid="unread-alert"
              className="bg-primary h-[0.625rem] w-[0.625rem] rounded-full inset-y-0 my-auto absolute -left-[1.375rem]"
            />
          )}
          {title}
        </span>
        <time dateTime={format(dateObject, dateFormatString)} className="caption text-neutral-800">
          {format(dateObject, dateFormatString)}
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
