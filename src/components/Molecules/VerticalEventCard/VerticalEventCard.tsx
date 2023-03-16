import React from 'react';

import { CardWrapper, CardWrapperProps } from '../../Atoms';
import { NotificationsActiveIcon, NotificationsNoneIcon } from '../../../svgIcons/Social';

export interface VerticalEventCardProps extends Omit<CardWrapperProps, 'innerClassNames'> {
  date: string | number | Date;
  title: string;
  months?: [string, ...string[]] & { length: 12 };
  alert?: boolean;
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

const VerticalEventCard = ({
  title,
  date,
  color,
  children,
  months = defaultMonths,
  alert,
  ...props
}: VerticalEventCardProps) => {
  const dateObject = new Date(date);

  return (
    <CardWrapper innerClassNames="idsk-vertical-event-card" {...props}>
      {!!color && (
        <div style={{ backgroundColor: color }} className="idsk-vertical-event-card__color-strip" />
      )}
      <div className="idsk-vertical-event-card__header">
        <div className="idsk-vertical-event-card__date">
          <time dateTime={dateObject.toISOString()} className="idsk-vertical-event-card__day">
            {dateObject.getDate()}
          </time>
          <p className="idsk-vertical-event-card__month">{months[dateObject.getMonth()]}</p>
        </div>
        <span style={{ color: color }} className="idsk-vertical-event-card__alert-icon">
          {!!alert ? <NotificationsActiveIcon /> : <NotificationsNoneIcon />}
        </span>
      </div>
      <div className="idsk-vertical-event-card__body">
        <div className="idsk-vertical-event-card__title">{title}</div>
        {children}
      </div>
    </CardWrapper>
  );
};

export default VerticalEventCard;
