import React, { ReactNode } from 'react';
import { format } from 'date-fns';
import classNames from 'classnames';

export interface ArticleCardProps extends React.AllHTMLAttributes<HTMLDivElement> {
  heading: ReactNode;
  featuredImg: ReactNode;
  date: string | number | Date;
  tags?: string[];
  dateFormatString?: string;
  imageWrapperClasses?: string;
}

const ArticleCard = ({
  heading,
  featuredImg,
  children,
  date,
  tags = [],
  dateFormatString = 'dd.MM.yyyy',
  className,
  imageWrapperClasses,
  ...props
}: ArticleCardProps) => {
  const dateObject = new Date(date);
  return (
    <div className={classNames('article-card', className)} {...props}>
      <div className={classNames('article-card__image-wrapper', imageWrapperClasses)}>
        {featuredImg}
      </div>
      <div>
        <p className="article-card__date-tags">
          <time dateTime={format(dateObject, dateFormatString)}>
            {format(dateObject, dateFormatString)}
          </time>{' '}
          {!!tags.length && (
            <span>— {tags.map((item, index) => (!index ? item : ' | ' + item))}</span>
          )}
        </p>
        <p className="article-card__heading">{heading}</p>
        <p>{children}</p>
      </div>
    </div>
  );
};

export default ArticleCard;
