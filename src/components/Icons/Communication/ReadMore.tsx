import * as React from 'react';
import { SVGProps } from 'react';

const SvgReadMore = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M14 9h7c.55 0 1-.45 1-1s-.45-1-1-1h-7c-.55 0-1 .45-1 1s.45 1 1 1ZM21 15h-7c-.55 0-1 .45-1 1s.45 1 1 1h7c.55 0 1-.45 1-1s-.45-1-1-1ZM21 11h-4c-.55 0-1 .45-1 1s.45 1 1 1h4c.55 0 1-.45 1-1s-.45-1-1-1ZM8.85 7.85a.5.5 0 0 0-.85.36V11H3c-.55 0-1 .45-1 1s.45 1 1 1h5v2.79c0 .45.54.67.85.35l3.79-3.79c.2-.2.2-.51 0-.71L8.85 7.85Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgReadMore;
