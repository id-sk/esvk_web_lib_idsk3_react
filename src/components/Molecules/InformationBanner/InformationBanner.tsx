import React, { MouseEventHandler, ReactElement, ReactNode, SVGProps, useState } from 'react';
import classNames from 'classnames';
import { CloseIcon } from '../../../svgIcons/Navigation';
import BaseButton from '../../Atoms/Button/BaseButton';

export interface InformationBannerProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  icon?: ReactElement<SVGProps<SVGSVGElement>>;
  variant?: 'information' | 'alert' | 'warning' | 'success';
  children?: ReactNode;
  actionButton?: ReactNode;
  hideCloseButton?: boolean;
  closeButtonOnClick?: MouseEventHandler<HTMLButtonElement> | undefined;
}

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

  // define close button by variant style
  const closeButton = (
    <BaseButton
      icon={<CloseIcon />}
      onClick={closeButtonOnClick || (() => setVisibility(false))}
      iconPosition={'left'}
      className={classNames(
        'p-1 pl-3 pr-0 hover:ring-primary hover:ring-1 hover:ring-offset-0 rounded',
        {
          'text-alert-positive': variant == 'success',
          'text-blue-500': variant == 'information',
          'text-alert-attention-dark': variant == 'alert',
          'text-alert-warning-dark': variant == 'warning'
        }
      )}
    />
  );

  return visible ? (
    <div
      className={classNames(
        'information-banner',
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
      <div
        className={classNames('information-banner__color-strip', {
          'bg-primary': variant == 'information',
          'bg-alert-attention': variant == 'alert',
          'bg-alert-warning': variant == 'warning',
          'bg-alert-positive': variant == 'success'
        })}
      />

      {!!icon &&
        React.cloneElement(icon, {
          className: classNames('information-banner__icon', icon.props.className)
        })}
      <div className={'flex-grow-[2]'}>
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

      {/* Action button or close button if button is not hidden */}
      {actionButton || (!hideCloseButton && closeButton)}
    </div>
  ) : null;
};

export default InformationBanner;
