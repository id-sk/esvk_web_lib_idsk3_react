import React, { ReactNode } from 'react';
import classNames from 'classnames';
import Person from '../../../svgIcons/Social/Person';

export interface AvatarCircleProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  firstName: string;
  lastName: string;
  circleContent?: 'icon' | ReactNode;
  showName?: boolean;
  caption?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  buttonClasses?: string;
}

const AvatarCircle = ({
  firstName,
  lastName,
  showName = false,
  caption,
  circleContent,
  onClick = () => {},
  className = '',
  buttonClasses = '',
  ...props
}: AvatarCircleProps) => {
  return (
    <div className={classNames('avatar-circle', className)}>
      <button
        className={classNames(
          'avatar-circle__circle',
          {
            'avatar-circle--custom-content': circleContent
          },
          buttonClasses
        )}
        onClick={onClick}
        {...props}
      >
        {circleContent == 'icon' ? (
          <Person />
        ) : circleContent ? (
          circleContent
        ) : (
          firstName?.slice(0, 1) + lastName?.slice(0, 1)
        )}
      </button>
      {(!!showName || !!caption) && (
        <div className="avatar-circle__text">
          <div className="avatar-circle__text__name">
            {firstName} {lastName}
          </div>
          {!!caption && <div className="avatar-circle__text__caption">{caption}</div>}
        </div>
      )}
    </div>
  );
};

export default AvatarCircle;
