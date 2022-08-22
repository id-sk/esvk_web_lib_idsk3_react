import React, { ReactNode, useState } from 'react';
import { PrimaryButton, SecondaryButton } from '../../Atoms';
import { CloseIcon } from '../../../svgIcons/Navigation';

export interface FeedbackProps extends React.AllHTMLAttributes<HTMLDivElement> {
  yesButton: ReactNode;
  noButton: ReactNode;
  closeButton?: ReactNode;
  closeButtonOnClick?: () => void;
  yesButtonOnClick?: () => void;
  noButtonOnClick?: () => void;
}

const Feedback = ({ children, closeButton = <CloseIcon />, id, ...props }: FeedbackProps) => {
  const [visible, setVisibility] = useState(true);

  return visible ? (
    <div className="feedback">
      <div className="feedback__container">
        <div className="feedback__text-and-buttons">
          <div className="feedback__text">{children}</div>

          <PrimaryButton
            onClick={props.yesButtonOnClick}
            className="mr-[0.938rem]"
            id={id ? id + '-yes-button' : undefined}
          >
            {props.yesButton}
          </PrimaryButton>
          <SecondaryButton
            onClick={props.noButtonOnClick}
            variant="transparent"
            id={id ? id + '-no-button' : undefined}
          >
            {props.noButton}
          </SecondaryButton>
        </div>
        <button
          className="feedback__close-button"
          onClick={props.closeButtonOnClick || (() => setVisibility(false))}
          id={id ? id + '-close-button' : undefined}
          data-testid="closeButton"
        >
          {closeButton}
        </button>
      </div>
    </div>
  ) : null;
};

export default Feedback;
