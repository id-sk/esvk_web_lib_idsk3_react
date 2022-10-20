import React, { ReactNode } from 'react';
import classNames from 'classnames';

export interface FooterContainerProps extends React.AllHTMLAttributes<HTMLElement> {
  linksList: ReactNode[];
  bottomSection?: ReactNode;
  logo?: ReactNode;
}

export const FooterContainerSectionHeading = ({
  children,
  className,
  ...props
}: React.AllHTMLAttributes<HTMLParagraphElement>) => (
  <h4 className={classNames('footer-container__section-heading', className)} {...props}>
    {children}
  </h4>
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
  logo,
  ...props
}: FooterContainerProps) => {
  return (
    <footer className="footer-container" {...props}>
      <div className="footer-container__content">
        {children}
        <aside className="footer-container__aside">
          {!!linksList.length && (
            <ul className="footer-container__links-list">
              {linksList.map((link, key) => (
                <li key={key}>{link}</li>
              ))}
            </ul>
          )}
          {bottomSection}
          {!!logo && <div className="footer-container__logo-wrapper">{logo}</div>}
        </aside>
      </div>
    </footer>
  );
};

export default FooterContainer;
