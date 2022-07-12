import React, { ReactNode } from 'react';
import classNames from 'classnames';

export interface FooterContainerProps extends React.AllHTMLAttributes<HTMLElement> {
  linksList: ReactNode[];
  bottomSection?: ReactNode;
}

export const FooterContainerSectionHeading = ({
  children,
  className,
  ...props
}: React.AllHTMLAttributes<HTMLParagraphElement>) => (
  <p className={classNames('footer-container__section-heading', className)} {...props}>
    {children}
  </p>
);

export const FooterContainerSection = ({
  children,
  className,
  ...props
}: React.AllHTMLAttributes<HTMLDivElement>) => (
  <div className={classNames('footer-container__section', className)} {...props}>
    {children}
  </div>
);

const FooterContainer = ({
  className,
  children,
  linksList = [],
  bottomSection,
  ...props
}: FooterContainerProps) => {
  return (
    <footer className="footer-container" {...props}>
      <div className="footer-container__content">
        {children}
        <aside className="footer-container__aside">
          {!!linksList.length && <div className="footer-container__links-list">{linksList}</div>}
          {bottomSection}
        </aside>
      </div>
    </footer>
  );
};

export default FooterContainer;
