import React, { ReactNode } from 'react';
import { format } from 'date-fns';
import classNames from 'classnames';
import { AnchorCard, AnchorCardProps } from '../../Atoms';

export interface ArticleCardProps
  extends AnchorCardProps,
    React.AnchorHTMLAttributes<HTMLAnchorElement> {
  heading: ReactNode;
  featuredImg: ReactNode;
  date?: string | number | Date;
  datePosition?: 'top' | 'bottom';
  tags?: string[];
  dateFormatString?: string;
  imageWrapperClasses?: string;
  anchorTagClasses?: string;
}

const ArticleCard = React.forwardRef<HTMLAnchorElement, ArticleCardProps>(
  (
    {
      heading,
      featuredImg,
      children,
      date,
      datePosition = 'bottom',
      tags = [],
      dateFormatString = 'dd.MM.yyyy',
      className,
      imageWrapperClasses,
      anchorTagClasses,
      layout,
      href,
      ...props
    },
    ref
  ) => {
    const renderDateTags = (dateToRender: string | number | Date) => {
      const dateObject = new Date(dateToRender);
      return (
        <>
          <time dateTime={format(dateObject, dateFormatString)}>
            {format(dateObject, dateFormatString)}
          </time>
          {!!tags.length && (
            <>
              <span>—</span>
              {tags.map((item, index) =>
                !index ? (
                  <span key={index}>{item}</span>
                ) : (
                  <React.Fragment key={index}>
                    <span>|</span>
                    <span>{item}</span>
                  </React.Fragment>
                )
              )}
            </>
          )}
        </>
      );
    };

    const AnchorCardComponent = () => {
      return (
        <AnchorCard
          className={classNames(
            'idsk-article_card',
            'idsk-anchor-card--focusable',
            {
              'idsk-article-card--vertical': layout === 'vertical' && !!featuredImg,
              'idsk-article-card--linked': !!href
            },
            className
          )}
          layout={layout}
          grid={true}
        >
          {featuredImg && (
            <div className={classNames('idsk-article-card__image-wrapper', imageWrapperClasses)}>
              {featuredImg}
            </div>
          )}
          <div className="idsk-article_card__content">
            {!!date && datePosition === 'top' && (
              <p className="idsk-article-card__date-tags idsk-article-card__date-tags--top">
                {renderDateTags(date)}
              </p>
            )}
            <div className="idsk-anchor-card__heading">
              <h3
                className={classNames({
                  'idsk-sign-post__link': !!href
                })}
              >
                {heading}
              </h3>
            </div>
            <div className="idsk-anchor-card__description">{children}</div>
            {!!date && datePosition === 'bottom' && (
              <p className="idsk-article-card__date-tags">{renderDateTags(date)}</p>
            )}
          </div>
        </AnchorCard>
      );
    };

    return !!href ? (
      <a href={href} ref={ref} className={anchorTagClasses} {...props}>
        <AnchorCardComponent />
      </a>
    ) : (
      <AnchorCardComponent />
    );
  }
);

export default ArticleCard;
