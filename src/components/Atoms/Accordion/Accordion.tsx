import React, { useState, ReactNode } from 'react';
import classNames from 'classnames';
import { AddIcon, RemoveIcon } from '../../../svgIcons/Content';

export interface AccordionProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  heading: ReactNode;
  subTitle?: string;
  initiallyClosed?: boolean;
}

const Accordion = ({
  subTitle,
  heading,
  onClick = () => {},
  children,
  initiallyClosed = true,
  ...props
}: AccordionProps) => {
  const [closed, setClosed] = useState<boolean>(initiallyClosed);

  const handleOnClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    onClick(e);
    setClosed((p) => !p);
  };

  const contentClasses = classNames('accordion__content', { 'accordion__content--open': !closed });
  return (
    <div className="accordion">
      <button className="accordion__button" onClick={handleOnClick} {...props}>
        <span className="accordion__title">
          {heading}
          {!closed ? (
            <RemoveIcon className="accordion__icon" />
          ) : (
            <AddIcon className="accordion__icon" />
          )}
        </span>
        {!!subTitle && <span className="accordion__subtitle">{subTitle}</span>}
      </button>
      <div className={contentClasses}>{children}</div>
    </div>
  );
};

export default Accordion;
