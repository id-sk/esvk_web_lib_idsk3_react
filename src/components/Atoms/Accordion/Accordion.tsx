import React, { Children, useState, ReactNode } from 'react';
import classNames from 'classnames';
import { AddIcon, RemoveIcon } from '../../../svgIcons/Content';
import { v4 as uuidv4 } from 'uuid';

export interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  heading: ReactNode;
  subTitle?: string;
  initiallyClosed?: boolean;
  inGroup?: boolean;
  index?: number | 0;
  bgGray?: boolean;
  fullWidthBody?: boolean;
  size?: 'large' | 'small';
  errorMessageId?: string;
}

const Accordion = ({
  subTitle,
  heading,
  onClick = () => {},
  children,
  initiallyClosed = true,
  inGroup = false,
  index = 0,
  size = 'large',
  className,
  bgGray = false,
  fullWidthBody = false,
  errorMessageId,
  ...props
}: AccordionProps) => {
  const [closed, setClosed] = useState<boolean>(initiallyClosed);

  const idForAria: string = errorMessageId || uuidv4();

  const handleOnClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    onClick(e);
    setClosed((p) => !p);
  };

  const contentClasses = classNames('accordion__content', { 'accordion__content--open': !closed });
  return (
    <div
      role={!!inGroup ? 'listitem' : ''}
      className={classNames(
        'accordion',
        {
          'accordion--in-list-group': inGroup,
          'accordion--gray': bgGray,
          'accordion--small': size == 'small'
        },
        className
      )}
    >
      {!!inGroup && (
        <div className={classNames('accordion--list', { 'accordion--list-bullet': !index })}>
          <span className="accordion__list-number">{!!index && index}</span>
        </div>
      )}
      <div className="accordion__button" onClick={handleOnClick} {...props}>
        <span className="accordion__title">
          <button aria-expanded={!closed} aria-controls={idForAria}>
            {heading}
          </button>
          {!closed ? (
            <RemoveIcon className="accordion__icon" />
          ) : (
            <AddIcon className="accordion__icon" />
          )}
        </span>
        {!!subTitle && <span className="accordion__subtitle">{subTitle}</span>}
      </div>
      <div id={idForAria} className={contentClasses}>
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
    <div className="accordion--list-group" role="list" {...props}>
      {renderedChildren}
    </div>
  );
}

export default Accordion;
