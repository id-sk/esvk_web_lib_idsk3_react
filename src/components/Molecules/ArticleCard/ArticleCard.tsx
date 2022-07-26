import React, { ReactNode } from 'react';
import { format } from 'date-fns';
import classNames from 'classnames';
import { AnchorCard, AnchorCardProps } from '../../Atoms';

export interface ArticleCardProps extends AnchorCardProps {
  heading: ReactNode;
  featuredImg: ReactNode;
  date: string | number | Date;
  datePosition?: 'top' | 'bottom';
  tags?: string[];
  dateFormatString?: string;
  imageWrapperClasses?: string;
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
      layout,
      ...props
    },
    ref
  ) => {
    const dateObject = new Date(date);
    const dateTags = (
      <>
        <time dateTime={format(dateObject, dateFormatString)}>
          {format(dateObject, dateFormatString)}
        </time>{' '}
        {!!tags.length && (
          <span>— {tags.map((item, index) => (!index ? item : ' | ' + item))}</span>
        )}
      </>
    );
    return (
      <AnchorCard className={className} layout={layout} grid={true} {...props} ref={ref}>
        <div className={classNames('article-card__image-wrapper', imageWrapperClasses)}>
          {featuredImg}
        </div>
        <div className="flex-1">
          {datePosition === 'top' && <p className="article-card__date-tags--top">{dateTags}</p>}
          <p className="anchor-card__heading">{heading}</p>
          <div className="article-card__text">{children}</div>
          {datePosition === 'bottom' && <p className="article-card__date-tags">{dateTags}</p>}
        </div>
      </AnchorCard>
    );
  }
);

export default ArticleCard;
