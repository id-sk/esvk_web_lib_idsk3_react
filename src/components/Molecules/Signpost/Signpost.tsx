import React, { Children, ReactNode } from 'react';
import classNames from 'classnames';
import { AnchorCard, AnchorCardProps, PrimaryButton, PrimaryButtonProps } from '../../Atoms';
import { ArrowForwardIcon } from '../../../svgIcons/Navigation';
import OpenInNewIcon from '../../../svgIcons/Actions/OpenInNew';

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

    const CardComponent = ({ openInNew }: { openInNew?: boolean }) => {
      return (
        <AnchorCard
          className={classNames(
            { 'idsk-signpost--in-group': inGroup, 'idsk-anchor-card--focusable': !!href },
            className
          )}
          layout={layout}
        >
          {!!icon && (
            <div
              className={classNames('idsk-signpost__icon', {
                'idsk-signpost__icon--vertical': layout === 'vertical'
              })}
            >
              {icon}
            </div>
          )}
          <div className="idsk-signpost__container">
            <div>
              <h3
                className={classNames('idsk-anchor-card__heading', {
                  'idsk-sign-post__link': !!href
                })}
              >
                {heading}
                {openInNew && <OpenInNewIcon className="w-5" />}
              </h3>
              {!!children && (
                <div
                  className={classNames('idsk-anchor-card__description', {
                    'idsk-anchor-card__description--with-action': renderAction
                  })}
                >
                  {children}
                </div>
              )}
              {renderAction && <PrimaryButton {...actionButton} />}
            </div>
            {layout === 'vertical' && withArrowIcon && (
              <div className="idsk-signpost__arrow-icon">{arrowIcon}</div>
            )}
          </div>
        </AnchorCard>
      );
    };

    return !!href ? (
      <a href={href} ref={ref} {...props} className="idsk-signpost">
        <CardComponent openInNew={props.target === '_blank'} />
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
      } as SignpostProps);
    }
  });
  return (
    <div className="idsk-signpost-group" {...props}>
      {renderedChildren}
    </div>
  );
}

export default Signpost;
