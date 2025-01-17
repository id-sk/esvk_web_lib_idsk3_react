import * as React from 'react';
import { SVGProps } from 'react';

const SvgSpeakerNotesOff = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1.91 2.36a.9.9 0 0 0-1.27 0 .9.9 0 0 0 0 1.27l1.38 1.38L2 22l4-4h9l5.09 5.09a.9.9 0 0 0 1.27 0 .9.9 0 0 0 0-1.27L1.91 2.36ZM7 14c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1Zm0-3c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1Zm13-9H4.08l7 7H17c.55 0 1 .45 1 1s-.45 1-1 1h-3.92l6.99 6.99C21.14 17.95 22 17.08 22 16V4c0-1.1-.9-2-2-2Zm-3 6h-6c-.55 0-1-.45-1-1s.45-1 1-1h6c.55 0 1 .45 1 1s-.45 1-1 1Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgSpeakerNotesOff;
