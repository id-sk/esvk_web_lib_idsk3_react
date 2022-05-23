import React, { useState, ReactNode } from 'react';
import classNames from 'classnames';
import { AddIcon, RemoveIcon } from '../../../svgIcons/Content';

export interface AccordeonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  heading: ReactNode;
  subTitle?: string;
  initiallyClosed?: boolean;
}

const Accordeon = ({
  subTitle,
  heading,
  onClick = () => {},
  children,
  initiallyClosed = true,
  ...props
}: AccordeonProps) => {
  const [closed, setClosed] = useState<boolean>(initiallyClosed);

  const handleOnClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    onClick(e);
    setClosed((p) => !p);
  };

  const contentClasses = classNames('accordeon__content', { 'accordeon__content--open': !closed });
  return (
    <div className="accordeon">
      <button className="accordeon__button" onClick={handleOnClick} {...props}>
        <span className="accordeon__title">
          {heading}
          {!closed ? (
            <RemoveIcon className="accordeon__icon" />
          ) : (
            <AddIcon className="accordeon__icon" />
          )}
        </span>
        {!!subTitle && <span className="accordeon__subtitle">{subTitle}</span>}
      </button>
      <div className={contentClasses}>{children}</div>
    </div>
  );
};

export default Accordeon;
