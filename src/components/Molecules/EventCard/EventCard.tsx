import React from 'react';

import { CardWrapper, CardWrapperProps } from '../../Atoms';

export interface EventCardProps extends Omit<CardWrapperProps, 'innerClassNames'> {
  date: string | number | Date;
  title: string;
  months?: [string, ...string[]] & { length: 12 };
}

const defaultMonths: [string, ...string[]] & { length: 12 } = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'Máj',
  'Jún',
  'Júl',
  'Aug',
  'Sep',
  'Okt',
  'Nov',
  'Dec'
];

const EventCard = ({
  title,
  date,
  color,
  children,
  months = defaultMonths,
  ...props
}: EventCardProps) => {
  const dateObject = new Date(date);

  return (
    <CardWrapper
      color={color}
      innerClassNames="px-4 py-5 grid grid-cols-[auto_1fr] gap-x-4"
      {...props}
    >
      <div className="text-center relative -top-1.5">
        <time dateTime={dateObject.toISOString()} className="subtitle font-bold">
          {dateObject.getDate()}
        </time>
        <p className="caption text-neutral-800">{months[dateObject.getMonth()]}</p>
      </div>
      <div>
        <div className="font-bold">{title}</div>
        {children}
      </div>
    </CardWrapper>
  );
};

export default EventCard;
