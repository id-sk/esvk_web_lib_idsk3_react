import React, { ReactNode } from 'react';
import classNames from 'classnames';
import Person from '../../../svgIcons/Social/Person';

export interface AvatarCircleProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  firstName?: string;
  lastName?: string;
  fullName?: string;
  isCompany?: boolean;
  circleContent?: 'icon' | ReactNode;
  showName?: boolean;
  showFullName?: boolean;
  caption?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  buttonClasses?: string;
}

const AvatarCircle = ({
  firstName = '',
  lastName = '',
  fullName = '',
  isCompany = false,
  showName = false,
  showFullName = false,
  caption,
  circleContent,
  onClick = () => {},
  className = '',
  buttonClasses = '',
  ...props
}: AvatarCircleProps) => {
  const formatInitials = (name: string, company?: boolean) => {
    const words = name.split(' ');

    if (words.length === 1) {
      return words[0].substring(0, 2).toUpperCase();
    }

    if (words.length === 2) {
      return `${words[0].substring(0, 1)}${words[1].substring(0, 1)}`.toUpperCase();
    }

    if (words.length > 2) {
      if (company) {
        return `${words[0].substring(0, 1)}${words[1].substring(0, 1)}`.toUpperCase();
      }
      return `${words[0].substring(0, 1)}${words[words.length - 1].substring(0, 1)}`.toUpperCase();
    }

    return '';
  };

  const getInitials = (): string => {
    const filteredNameString: string = (fullName || [firstName, lastName].join(' '))
      .split(' ')
      .filter((word) => !word.includes('.'))
      .join(' ')
      .trim();

    return formatInitials(filteredNameString, isCompany);
  };

  const renderName = (): string => {
    if (!!showFullName && fullName.length) {
      return fullName;
    }

    return `${firstName} ${lastName}`.trim();
  };

  return (
    <div className={classNames('idsk-avatar-circle', className)}>
      <button
        className={classNames(
          'idsk-avatar-circle__circle',
          {
            'idsk-avatar-circle--custom-content': circleContent
          },
          buttonClasses
        )}
        onClick={onClick}
        {...props}
      >
        {circleContent == 'icon' ? <Person /> : circleContent ? circleContent : getInitials()}
      </button>
      {(!!showName || !!showFullName || !!caption) && (
        <div className="idsk-avatar-circle__text">
          <div className="idsk-avatar-circle__text__name">{renderName()}</div>
          {!!caption && <div className="idsk-avatar-circle__text__caption">{caption}</div>}
        </div>
      )}
    </div>
  );
};

export default AvatarCircle;
