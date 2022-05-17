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
    <CardWrapper color={color} innerClassNames="event-card" {...props}>
      <div className="event-card__date">
        <time dateTime={dateObject.toISOString()} className="event-card__day">
          {dateObject.getDate()}
        </time>
        <p className="event-card__month">{months[dateObject.getMonth()]}</p>
      </div>
      <div>
        <div className="event-card__title">{title}</div>
        {children}
      </div>
    </CardWrapper>
  );
};

export default EventCard;
