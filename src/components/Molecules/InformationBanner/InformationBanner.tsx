import React, { MouseEventHandler, ReactElement, ReactNode, SVGProps, useState } from 'react';
import classNames from 'classnames';
import { CloseIcon } from '../../../svgIcons/Navigation';
import BaseButton from '../../Atoms/Button/BaseButton';

export interface InformationBannerProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  icon?: ReactElement<SVGProps<SVGSVGElement>>;
  type?: 'banner' | 'announcement';
  variant?: 'information' | 'alert' | 'warning' | 'success';
  children?: ReactNode;
  actionButton?: ReactNode;
  hideCloseButton?: boolean;
  closeButtonOnClick?: MouseEventHandler<HTMLButtonElement> | undefined;
}
const defaultInformationBannerProps: InformationBannerProps = {
  type: 'banner'
};

const InformationBanner = ({
  id,
  icon,
  title,
  variant = 'information',
  children,
  actionButton,
  hideCloseButton,
  closeButtonOnClick,
  className,
  ...props
}: InformationBannerProps) => {
  const [visible, setVisibility] = useState(true);

  props = { ...defaultInformationBannerProps, ...props };
  // define close button by variant style
  const closeButton = (
    <BaseButton
      icon={<CloseIcon />}
      onClick={closeButtonOnClick || (() => setVisibility(false))}
      iconPosition={'left'}
      className={classNames('information-banner__base-button', {
        'text-alert-positive': variant == 'success',
        'text-blue-500': variant == 'information',
        'text-alert-attention-dark': variant == 'alert',
        'text-alert-warning-dark': variant == 'warning'
      })}
    />
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
    >
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
            className: classNames('information-banner__icon', icon.props.className)
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

        <div>{actionButton || (!hideCloseButton && closeButton)}</div>
      </div>
    </div>
  ) : null;
};

export default InformationBanner;
