import React, { ReactNode, useState } from 'react';
import { PrimaryButton, SecondaryButton } from '../../Atoms';
import { CloseIcon } from '../../../svgIcons/Navigation';

export interface FeedbackProps extends React.AllHTMLAttributes<HTMLDivElement> {
  yesButton: ReactNode;
  noButton: ReactNode;
  closeButton?: ReactNode;
  yesButtonOnClick?: () => void;
  noButtonOnClick?: () => void;
  closeButtonOnClick?: () => void;
}

const Feedback = ({ children, closeButton = <CloseIcon />, ...props }: FeedbackProps) => {
  const [visible, setVisibility] = useState(true);

  return visible ? (
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
        <button
          className="feedback__close-button"
          onClick={props.closeButtonOnClick || (() => setVisibility(false))}
          data-testid="closeButton"
        >
          {closeButton}
        </button>
      </div>
    </div>
  ) : null;
};

export default Feedback;
