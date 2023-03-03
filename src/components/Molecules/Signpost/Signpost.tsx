import React, { Children, ReactNode } from 'react';
import classNames from 'classnames';
import { AnchorCard, AnchorCardProps, PrimaryButton, PrimaryButtonProps } from '../../Atoms';
import { ArrowForwardIcon } from '../../../svgIcons/Navigation';

export interface SignpostProps
  extends Omit<AnchorCardProps, 'grid'>,
    React.AnchorHTMLAttributes<HTMLAnchorElement> {
  icon?: ReactNode;
  heading: string;
  arrowIcon?: ReactNode;
  withArrowIcon?: boolean;
  inGroup?: boolean;
  actionButton?: PrimaryButtonProps;
}

const Signpost = React.forwardRef<HTMLAnchorElement, SignpostProps>(
  (
    {
      inGroup,
      icon,
      heading,
      children,
      arrowIcon = <ArrowForwardIcon />,
      className,
      layout = 'horizontal',
      actionButton,
      withArrowIcon = true,
      href,
      ...props
    },
    ref
  ) => {
    const renderAction = !!actionButton && layout === 'horizontal';

    const CardComponent = () => {
      return (
        <AnchorCard
          className={classNames(
            { 'signpost--in-group': inGroup, 'anchor-card--focusable': href },
            className
          )}
          layout={layout}
        >
          {!!icon && (
            <div
              className={classNames('signpost__icon', {
                'signpost__icon--vertical': layout === 'vertical'
              })}
            >
              {icon}
            </div>
          )}
          <div className="signpost__container">
            <div>
              <h3 className={classNames('anchor-card__heading', { 'sign-post__link': href })}>
                {heading}
              </h3>
              {!!children && (
                <div
                  className={classNames('anchor-card__description', {
                    'anchor-card__description--with-action': renderAction
                  })}
                >
                  {children}
                </div>
              )}
              {renderAction && <PrimaryButton {...actionButton} />}
            </div>
            {layout === 'vertical' && withArrowIcon && (
              <div className="signpost__arrow-icon">{arrowIcon}</div>
            )}
          </div>
        </AnchorCard>
      );
    };

    return href ? (
      <a href={href} ref={ref} {...props} className="signpost">
        <CardComponent />
      </a>
    ) : (
      <CardComponent />
    );
  }
);

export function SignpostsGroup({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  const renderedChildren = Children.map<ReactNode, ReactNode>(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        inGroup: true
      });
    }
  });
  return (
    <div className="signpost-group" {...props}>
      {renderedChildren}
    </div>
  );
}

export default Signpost;
