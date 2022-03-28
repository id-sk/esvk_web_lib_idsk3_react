import * as React from 'react';
import { SVGProps } from 'react';

const SvgHighlightAlt = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M17 5h-2V3h2v2Zm2 4h2V7h-2v2Zm0 4h2v-2h-2v2Zm-8 8h2v-2h-2v2ZM7 5h2V3H7v2ZM3 17h2v-2H3v2Zm2 4v-2H3c0 1.1.9 2 2 2ZM19 3v2h2c0-1.1-.9-2-2-2Zm-8 2h2V3h-2v2ZM3 9h2V7H3v2Zm4 12h2v-2H7v2Zm-4-8h2v-2H3v2Zm0-8h2V3c-1.1 0-2 .9-2 2Zm15.71 12.29 1.44-1.44c.32-.32.09-.85-.35-.85H16c-.55 0-1 .45-1 1v3.79c0 .45.54.67.85.35l1.44-1.44 2 2a.996.996 0 1 0 1.41-1.41l-1.99-2Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgHighlightAlt;
