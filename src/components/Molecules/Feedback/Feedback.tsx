import React, { ReactNode, useState } from 'react';
import { PrimaryButton, SecondaryButton } from '../../Atoms';
import { CloseIcon } from '../../../svgIcons/Navigation';

export interface FeedbackProps extends React.AllHTMLAttributes<HTMLDivElement> {
  yesButton: ReactNode;
  noButton: ReactNode;
  closeButton?: ReactNode;
  reportButton?: ReactNode;
  closeButtonOnClick?: () => void;
  yesButtonOnClick?: () => void;
  noButtonOnClick?: () => void;
  reportButtonOnClick?: () => void;
}

const Feedback = ({ children, closeButton = <CloseIcon />, id, ...props }: FeedbackProps) => {
  const [visible, setVisibility] = useState(true);

  return visible ? (
    <div className="idsk-feedback">
      <div className="idsk-feedback__container">
        <div className="idsk-feedback__text-and-buttons">
          <div className="idsk-feedback__text">{children}</div>

          <PrimaryButton
            onClick={props.yesButtonOnClick}
            className="idsk-feedback__button"
            id={id ? id + '-yes-button' : undefined}
          >
            {props.yesButton}
          </PrimaryButton>
          <SecondaryButton
            className="idsk-feedback__button"
            onClick={props.noButtonOnClick}
            variant="transparent"
            id={id ? id + '-no-button' : undefined}
          >
            {props.noButton}
          </SecondaryButton>
        </div>
        <div className="idsk-feedback__close-and-report">
          {!!props.reportButton && (
            <SecondaryButton
              className="idsk-feedback__report-button"
              onClick={props.reportButtonOnClick}
              variant="transparent"
              id={id ? id + '-report-button' : undefined}
            >
              {props.reportButton}
            </SecondaryButton>
          )}
          <button
            className="idsk-feedback__close-button"
            onClick={props.closeButtonOnClick || (() => setVisibility(false))}
            id={id ? id + '-close-button' : undefined}
            data-testid="closeButton"
          >
            {closeButton}
          </button>
        </div>
      </div>
    </div>
  ) : null;
};

export default Feedback;
