import * as React from 'react';
import { SVGProps } from 'react';

const SvgFlipToFront = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3 13h2v-2H3v2Zm0 4h2v-2H3v2Zm2 4v-2H3a2 2 0 0 0 2 2ZM3 9h2V7H3v2Zm12 12h2v-2h-2v2Zm4-18H9a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2Zm-1 12h-8c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h8c.55 0 1 .45 1 1v8c0 .55-.45 1-1 1Zm-7 6h2v-2h-2v2Zm-4 0h2v-2H7v2Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgFlipToFront;
