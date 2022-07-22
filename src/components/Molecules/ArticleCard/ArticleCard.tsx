import React, { ReactNode } from 'react';
import { format } from 'date-fns';
import classNames from 'classnames';
import { AnchorCard, AnchorCardProps } from '../../Atoms';

export interface ArticleCardProps extends AnchorCardProps {
  heading: ReactNode;
  featuredImg: ReactNode;
  date: string | number | Date;
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
    return (
      <AnchorCard className={className} layout={layout} grid={true} {...props} ref={ref}>
        <div className={classNames('article-card__image-wrapper', imageWrapperClasses)}>
          {featuredImg}
        </div>
        <div className="flex-1">
          <p className="anchor-card__heading">{heading}</p>
          <p className="article-card__text">{children}</p>{' '}
          <p className="article-card__date-tags">
            <time dateTime={format(dateObject, dateFormatString)}>
              {format(dateObject, dateFormatString)}
            </time>{' '}
            {!!tags.length && (
              <span>— {tags.map((item, index) => (!index ? item : ' | ' + item))}</span>
            )}
          </p>
        </div>
      </AnchorCard>
    );
  }
);

export default ArticleCard;
