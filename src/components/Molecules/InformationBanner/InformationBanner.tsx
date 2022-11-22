import React, { MouseEventHandler, ReactElement, ReactNode, SVGProps, useState } from 'react';
import classNames from 'classnames';
import { CloseIcon } from '../../../svgIcons/Navigation';
import BaseButton from '../../Atoms/Button/BaseButton';
import { v4 as uuidv4 } from 'uuid';

export interface InformationBannerProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  ariaLabel?: string;
  icon?: ReactElement<SVGProps<SVGSVGElement>>;
  type?: 'banner' | 'announcement';
  variant?: 'information' | 'alert' | 'warning' | 'success';
  children?: ReactNode;
  actionButton?: ReactNode;
  hideCloseButton?: boolean;
  closeButtonOnClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  closeButtonLabel?: string;
  errorMessageId?: string;
}
const defaultInformationBannerProps: InformationBannerProps = {
  type: 'banner'
};

const InformationBanner = ({
  id,
  icon,
  title,
  ariaLabel,
  variant = 'information',
  children,
  actionButton,
  hideCloseButton,
  closeButtonOnClick = () => {},
  closeButtonLabel,
  className,
  errorMessageId,
  ...props
}: InformationBannerProps) => {
  const [visible, setVisibility] = useState(true);

  props = { ...defaultInformationBannerProps, ...props };
  // define close button by variant style
  const closeButton = (
    <BaseButton
      onClick={(e) => {
        setVisibility(false);
        closeButtonOnClick(e);
      }}
      iconPosition={'left'}
      className={classNames('information-banner__base-button', {
        'information-banner__base-button--positive': variant == 'success',
        'information-banner__base-button--primary': variant == 'information',
        'information-banner__base-button--attention': variant == 'alert',
        'information-banner__base-button--warning': variant == 'warning'
      })}
      ariaLabel={closeButtonLabel}
    >
      <CloseIcon className="information-banner__base-button-icon" />
    </BaseButton>
  );
  const infoClasses = classNames(
    { 'information-banner': props.type == 'banner' },
    {
      'information-announcement': props.type == 'announcement'
    }
  );
  const infoWrapperClasses = classNames(
    { 'information-banner__wrapper': props.type == 'banner' },
    {
      'information-announcement__wrapper': props.type == 'announcement'
    }
  );
  const idForAria: string = errorMessageId || uuidv4();
  return visible ? (
    <div
      className={classNames(
        infoClasses,
        {
          'information-banner--information': variant == 'information',
          'information-banner--alert': variant == 'alert',
          'information-banner--warning': variant == 'warning',
          'information-banner--success': variant == 'success'
        },
        className
      )}
      {...props}
      role="alert"
      aria-labelledby={idForAria + '-label'}
    >
      <span className="sr-only" id={idForAria + '-label'}>
        {ariaLabel}
      </span>
      <div className={infoWrapperClasses}>
        {props.type == 'banner' && (
          <div
            className={classNames('information-banner__color-strip ', {
              'bg-primary': variant == 'information',
              'bg-alert-attention': variant == 'alert',
              'bg-alert-warning': variant == 'warning',
              'bg-alert-positive': variant == 'success'
            })}
          />
        )}

        {!!icon &&
          React.cloneElement(icon, {
            className: classNames('information-banner__icon', icon.props.className, {
              'information-banner__icon--primary': variant == 'information',
              'information-banner__icon--attention': variant == 'alert',
              'information-banner__icon--warning': variant == 'warning',
              'information-banner__icon--positive': variant == 'success'
            })
          })}
        <div className="information-banner__title-wrapper">
          {!!title && (
            <div
              className={classNames('information-banner__title', {
                'text-alert-positive-dark': variant == 'success',
                'text-primary-dark': variant == 'information',
                'text-alert-attention-dark': variant == 'alert',
                'text-alert-warning-dark': variant == 'warning'
              })}
            >
              {title}
            </div>
          )}
          {!!children && (
            <div
              className={classNames('information-banner__description', {
                'information-banner__description--without-title': !title
              })}
            >
              {children}
            </div>
          )}
        </div>
        <div className="information-banner__close-button">
          {actionButton || (!hideCloseButton && closeButton)}
        </div>
      </div>
    </div>
  ) : null;
};

export default InformationBanner;
