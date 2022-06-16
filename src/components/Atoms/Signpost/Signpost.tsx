import React, { Children, ReactNode } from 'react';
import classNames from 'classnames';

export interface SignpostProps extends React.AllHTMLAttributes<HTMLDivElement> {
  socialIcon?: ReactNode;
  icon?: ReactNode;
  titleIcon?: ReactNode;
  title: string;
  arrowIcon?: ReactNode;
  inGroup?: boolean;
  onClick: () => void;
}

const Signpost = (props: SignpostProps) => {
  return (
    <div
      className={classNames(
        'signpost',
        props.inGroup ? 'signpost--in-group' : 'signpost--rounded-border'
      )}
      onClick={props.onClick}
    >
      <div className="signpost__container">
        {!!props.socialIcon && <div className="signpost__social-icon">{props.socialIcon}</div>}
        <div>
          {!!props.icon && <div className="signpost__icon">{props.icon}</div>}
          <div className="signpost__title">
            {!!props.titleIcon && <div className="signpost__title-icon">{props.titleIcon}</div>}
            {props.title}
          </div>
          <div className="signpost__description">{props.children}</div>
        </div>
      </div>
      <div className="signpost__arrow-icon">{props.arrowIcon}</div>
    </div>
  );
};

export function SignpostsGroup({ children }: React.AllHTMLAttributes<HTMLDivElement>) {
  const renderedChildren = Children.map<ReactNode, ReactNode>(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        inGroup: true
      });
    }
  });
  return <div className="signpost-group">{renderedChildren}</div>;
}

export default Signpost;
