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
  const idForAria: string = errorMessageId || uuidv4();
  // define close button by variant style
  const closeButton = (
    <BaseButton
      onClick={(e) => {
        setVisibility(false);
        closeButtonOnClick(e);
      }}
      iconPosition={'left'}
      className={classNames('idsk-information-banner__close-button', {
        'idsk-information-banner__close-button--positive': variant == 'success',
        'idsk-information-banner__close-button--primary': variant == 'information',
        'idsk-information-banner__close-button--attention': variant == 'alert',
        'idsk-information-banner__close-button--warning': variant == 'warning'
      })}
      ariaDescribedBy={idForAria + '-label'}
      ariaLabel={closeButtonLabel}
    >
      <CloseIcon className="idsk-information-banner__close-button-icon" />
    </BaseButton>
  );
  const infoClasses = classNames({
    'idsk-information-banner': props.type == 'banner',
    'idsk-information-announcement': props.type == 'announcement'
  });
  const infoWrapperClasses = classNames({
    'idsk-information-banner__wrapper': props.type == 'banner',
    'idsk-information-announcement__wrapper': props.type == 'announcement',
    'idsk-information-banner__wrapper--with-close-button': !actionButton && !hideCloseButton
  });

  return visible ? (
    <div
      className={classNames(
        infoClasses,
        {
          'idsk-information-banner--information': variant == 'information',
          'idsk-information-banner--alert': variant == 'alert',
          'idsk-information-banner--warning': variant == 'warning',
          'idsk-information-banner--success': variant == 'success'
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
            className={classNames('idsk-information-banner__color-strip ', {
              'idsk-bg-primary': variant == 'information',
              'idsk-bg-alert-attention': variant == 'alert',
              'idsk-bg-alert-warning': variant == 'warning',
              'idsk-bg-alert-positive': variant == 'success'
            })}
          />
        )}

        {!!icon &&
          React.cloneElement(icon, {
            className: classNames('idsk-information-banner__icon', icon.props.className, {
              'idsk-information-banner__icon--primary': variant == 'information',
              'idsk-information-banner__icon--attention': variant == 'alert',
              'idsk-information-banner__icon--warning': variant == 'warning',
              'idsk-information-banner__icon--positive': variant == 'success'
            })
          })}
        <div className="idsk-information-banner__title-wrapper">
          {!!title && (
            <h3
              className={classNames('idsk-information-banner__title', {
                'idsk-text-alert-positive-dark': variant == 'success',
                'idsk-text-primary-dark': variant == 'information',
                'idsk-text-alert-attention-dark': variant == 'alert',
                'idsk-text-alert-warning-dark': variant == 'warning'
              })}
            >
              {title}
            </h3>
          )}
          {!!children && (
            <div
              className={classNames('idsk-information-banner__description', {
                'idsk-information-banner__description--without-title': !title
              })}
            >
              {children}
            </div>
          )}
        </div>
        {actionButton || (!hideCloseButton && closeButton) || null}
      </div>
    </div>
  ) : null;
};

export default InformationBanner;
