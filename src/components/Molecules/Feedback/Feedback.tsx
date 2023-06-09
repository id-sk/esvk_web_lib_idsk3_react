import React, { useState } from 'react';
import { PrimaryButton, SecondaryButton } from '../../Atoms';
import { CloseIcon } from '../../../svgIcons/Navigation';
import classNames from 'classnames';

export interface FeedbackProps extends React.AllHTMLAttributes<HTMLDivElement> {
  closeButton?: boolean;
  yesButtonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
  noButtonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
  closeButtonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
  reportButtonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
}

const Feedback = ({ children, closeButton, id, ...props }: FeedbackProps) => {
  const [visible, setVisibility] = useState(true);

  return visible ? (
    <div className="idsk-feedback">
      <div className="idsk-feedback__container idsk-page-content">
        <div className="flex flex-wrap gap-4 flex-auto justify-between">
          <div className="idsk-feedback__text-and-buttons">
            <div className="idsk-feedback__text">{children}</div>
            <PrimaryButton
              type="button"
              {...props.yesButtonProps}
              className={classNames('idsk-feedback__button', props.yesButtonProps?.className)}
              id={id ? id + '-yes-button' : undefined}
            >
              {props.yesButtonProps?.children}
            </PrimaryButton>
            <SecondaryButton
              {...props.noButtonProps}
              className={classNames('idsk-feedback__button', props.noButtonProps?.className)}
              variant="transparent"
              id={id ? id + '-no-button' : undefined}
            >
              {props.noButtonProps?.children}
            </SecondaryButton>
          </div>
          {!!props.reportButtonProps && (
            <SecondaryButton
              {...props.reportButtonProps}
              className={classNames(
                'idsk-feedback__report-button',
                props.reportButtonProps?.className
              )}
              variant="transparent"
              id={id ? id + '-report-button' : undefined}
            >
              {props.reportButtonProps?.children}
            </SecondaryButton>
          )}
        </div>
        {closeButton && (
          <button
            type="button"
            {...props.closeButtonProps}
            className={classNames('idsk-feedback__close-button', props.closeButtonProps?.className)}
            onClick={props.closeButtonProps?.onClick || (() => setVisibility(false))}
            id={id ? id + '-close-button' : undefined}
            data-testid="closeButton"
          >
            <CloseIcon />
          </button>
        )}
      </div>
    </div>
  ) : null;
};

export default Feedback;
