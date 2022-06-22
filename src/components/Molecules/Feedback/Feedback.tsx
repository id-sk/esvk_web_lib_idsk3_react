import React, { ReactNode } from 'react';
import { PrimaryButton, SecondaryButton } from '../../Atoms';
import { CloseIcon } from '../../../svgIcons/Navigation';

export interface FeedbackProps extends React.AllHTMLAttributes<HTMLDivElement> {
  yesButton: ReactNode;
  noButton: ReactNode;
  closeButton: ReactNode;
  yesButtonOnClick?: () => void;
  noButtonOnClick?: () => void;
  closeButtonOnClick?: () => void;
}

const Feedback = ({ children, closeButton = <CloseIcon />, ...props }: FeedbackProps) => {
  return (
    <div className="feedback">
      <div className="feedback__container">
        <div className="feedback__text-and-buttons">
          <div className="feedback__text">{children}</div>

          <PrimaryButton onClick={props.yesButtonOnClick} className="mr-[0.938rem]">
            {props.yesButton}
          </PrimaryButton>
          <SecondaryButton onClick={props.yesButtonOnClick} variant="transparent">
            {props.noButton}
          </SecondaryButton>
        </div>
        <div
          className="feedback__close-button"
          onClick={props.closeButtonOnClick}
          data-testid="closeButton"
        >
          {closeButton}
        </div>
      </div>
    </div>
  );
};

export default Feedback;
