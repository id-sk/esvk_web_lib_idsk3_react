import React, { Children, useState, ReactNode } from 'react';
import classNames from 'classnames';
import { AddIcon, RemoveIcon } from '../../../svgIcons/Content';

export interface AccordionProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  heading: ReactNode;
  subTitle?: string;
  initiallyClosed?: boolean;
  inGroup?: boolean;
  index?: number | 0;
  bgGray?: boolean;
  fullWidthBody?: boolean;
}

const Accordion = ({
  subTitle,
  heading,
  onClick = () => {},
  children,
  initiallyClosed = true,
  inGroup = false,
  index = 0,
  className,
  bgGray = false,
  fullWidthBody = false,
  ...props
}: AccordionProps) => {
  const [closed, setClosed] = useState<boolean>(initiallyClosed);

  const handleOnClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    onClick(e);
    setClosed((p) => !p);
  };

  const contentClasses = classNames('accordion__content', { 'accordion__content--open': !closed });
  return (
    <div
      className={classNames(
        'accordion',
        {
          'accordion--in-list-group': inGroup,
          'accordion--gray': bgGray
        },
        className
      )}
    >
      {!!inGroup && (
        <div className={classNames('accordion--list', { 'accordion--list-bullet': !index })}>
          <span className="accordion__list-number">{!!index && index}</span>
        </div>
      )}
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
      <div className={contentClasses}>
        <div
          className={classNames('accordion__content-body', {
            'accordion__content-body--full-width': fullWidthBody
          })}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export function AccordionListGroup({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  const renderedChildren = Children.map<ReactNode, ReactNode>(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        inGroup: true
      });
    }
  });
  return (
    <div className="accordion--list-group" {...props}>
      {renderedChildren}
    </div>
  );
}

export default Accordion;
