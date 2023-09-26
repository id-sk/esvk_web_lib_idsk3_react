import React, { Children, useState, ReactNode, ReactElement, SVGProps } from 'react';
import classNames from 'classnames';
import { AddIcon, RemoveIcon } from '../../../svgIcons/Content';
import { v4 as uuidv4 } from 'uuid';
import { PrimaryIconButton, TextButton } from '../Button';
import SvgCheck from '../../../svgIcons/Navigation/Check';

export interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  heading: ReactNode;
  headingAriaLabel?: string;
  subTitle?: string;
  initiallyClosed?: boolean;
  inGroup?: boolean;
  listItemVariant?: 'basic' | 'success';
  listItemIcon?: ReactElement<SVGProps<SVGSVGElement>>;
  listItemOnClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  listItemButtonProps?: React.ButtonHTMLAttributes<HTMLButtonElement> | undefined;
  index?: number | 0;
  bgGray?: boolean;
  fullWidthBody?: boolean;
  size?: 'large' | 'small';
  errorMessageId?: string;
}

const Accordion = ({
  subTitle,
  heading,
  headingAriaLabel,
  onClick = () => {},
  children,
  initiallyClosed = true,
  inGroup = false,
  listItemVariant = 'basic',
  listItemIcon,
  listItemButtonProps = undefined,
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

  const contentClasses = classNames('idsk-accordion__content', {
    'idsk-accordion__content--open': !closed
  });

  if (!!listItemIcon || listItemVariant == 'success') {
    listItemIcon = React.cloneElement(listItemIcon ?? <SvgCheck />, {
      className: 'idsk-accordion__list-icon'
    });
  }

  const roundedClassNames = 'idsk-accordion--list rounded-full border-black';

  return (
    <div
      role={!!inGroup ? 'listitem' : ''}
      className={classNames(
        'idsk-accordion',
        {
          'idsk-accordion--in-list-group': inGroup,
          'idsk-accordion--gray': bgGray,
          'idsk-accordion--small': size == 'small'
        },
        className
      )}
    >
      {!!inGroup && (
        <>
          {!!listItemIcon && !!index ? (
            !!listItemButtonProps ? (
              <PrimaryIconButton
                variant={listItemVariant}
                icon={listItemIcon}
                {...listItemButtonProps}
                className={classNames(roundedClassNames, listItemButtonProps?.className)}
              />
            ) : (
              <div
                className={classNames(roundedClassNames, {
                  'idsk-accordion--list--success': listItemVariant == 'success'
                })}
              >
                {listItemIcon}
              </div>
            )
          ) : (
            <>
              {!!listItemButtonProps && !!index ? (
                <TextButton
                  variant={listItemVariant}
                  {...listItemButtonProps}
                  className={classNames(
                    roundedClassNames,
                    'pt-1.5',
                    listItemButtonProps?.className
                  )}
                >
                  <span className="idsk-accordion__list-number">{index}</span>
                </TextButton>
              ) : (
                <div
                  className={classNames('idsk-accordion--list', {
                    'idsk-accordion--list-bullet': !index
                  })}
                >
                  <span className="idsk-accordion__list-number">{!!index && index}</span>
                </div>
              )}
            </>
          )}
        </>
      )}
      <div className="idsk-accordion__button" onClick={handleOnClick} {...props}>
        <span className="idsk-accordion__title">
          <button aria-expanded={!closed} aria-controls={idForAria} aria-label={headingAriaLabel}>
            {heading}
          </button>
          {!closed ? (
            <RemoveIcon className="idsk-accordion__icon" />
          ) : (
            <AddIcon className="idsk-accordion__icon" />
          )}
        </span>
        {!!subTitle && <span className="idsk-accordion__subtitle">{subTitle}</span>}
      </div>
      <div id={idForAria} className={contentClasses}>
        <div
          className={classNames('idsk-accordion__content-body', {
            'idsk-accordion__content-body--full-width': fullWidthBody
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
      } as AccordionProps);
    }
  });
  return (
    <div className="idsk-accordion--list-group" role="list" {...props}>
      {renderedChildren}
    </div>
  );
}

export default Accordion;
