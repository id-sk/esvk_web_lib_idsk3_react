import * as React from 'react';
import { SVGProps } from 'react';

const SvgBorderOuter = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M13 7h-2v2h2V7Zm0 4h-2v2h2v-2Zm4 0h-2v2h2v-2ZM3 5v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2Zm15 14H6c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v12c0 .55-.45 1-1 1Zm-5-4h-2v2h2v-2Zm-4-4H7v2h2v-2Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgBorderOuter;
