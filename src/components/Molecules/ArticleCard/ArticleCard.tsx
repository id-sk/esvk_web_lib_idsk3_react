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
}

const ArticleCard = ({
  heading,
  featuredImg,
  children,
  date,
  datePosition = 'bottom',
  tags = [],
  dateFormatString = 'dd.MM.yyyy',
  className,
  imageWrapperClasses,
  layout,
  ...props
}: ArticleCardProps) => {
  const renderDateTags = (dateToRender: string | number | Date) => {
    const dateObject = new Date(dateToRender);
    return (
      <>
        <time dateTime={format(dateObject, dateFormatString)}>
          {format(dateObject, dateFormatString)}
        </time>{' '}
        {!!tags.length && (
          <span>— {tags.map((item, index) => (!index ? item : ' | ' + item))}</span>
        )}
      </>
    );
  };

  return (
    <AnchorCard
      className={classNames(
        'article_card',
        { 'article-card--vertical': layout === 'vertical' },
        className
      )}
      layout={layout}
      grid={true}
      {...props}
    >
      <div className={classNames('article-card__image-wrapper', imageWrapperClasses)}>
        {featuredImg}
      </div>
      <div className="flex-1">
        {!!date && datePosition === 'top' && (
          <p className="article-card__date-tags--top">{renderDateTags(date)}</p>
        )}
        <div className="anchor-card__heading">{heading}</div>
        <div className="article-card__text">{children}</div>
        {!!date && datePosition === 'bottom' && (
          <p className="article-card__date-tags">{renderDateTags(date)}</p>
        )}
      </div>
    </AnchorCard>
  );
};

export default ArticleCard;
