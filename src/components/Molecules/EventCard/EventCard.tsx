import React from 'react';

import { CardWrapper, CardWrapperProps, Tag } from '../../Atoms';
import classNames from 'classnames';

export interface EventCardProps extends Omit<CardWrapperProps, 'innerClassNames'> {
  date: string | number | Date;
  title: string;
  months?: [string, ...string[]] & { length: 12 };
  isComplete?: boolean;
  completeLabel?: string;
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
  completeLabel,
  months = defaultMonths,
  isComplete = false,
  ...props
}: EventCardProps) => {
  const dateObject = new Date(date);

  const wrapperClasses = classNames('idsk-event-card', {
    'idsk-event-card--complete': isComplete
  });

  return (
    <CardWrapper color={isComplete ? '#BDBDBD' : color} innerClassNames={wrapperClasses} {...props}>
      <div className="idsk-event-card__date">
        <time dateTime={dateObject.toISOString()} className="idsk-event-card__day">
          {dateObject.getDate()}
        </time>
        <p className="idsk-event-card__month">{months[dateObject.getMonth()]}</p>
      </div>
      <div>
        <div className="idsk-event-card__title">
          {title}
          {isComplete && completeLabel && (
            <Tag className="idsk-event-card__complete-tag" size="small" label={completeLabel} />
          )}
        </div>
        {children}
      </div>
    </CardWrapper>
  );
};

export default EventCard;
