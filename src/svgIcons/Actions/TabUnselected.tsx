import * as React from 'react';
import { SVGProps } from 'react';

const SvgTabUnselected = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1 9h2V7H1v2Zm0 4h2v-2H1v2Zm0-8h2V3c-1.1 0-2 .9-2 2Zm8 16h2v-2H9v2Zm-8-4h2v-2H1v2Zm2 4v-2H1c0 1.1.9 2 2 2ZM21 3h-8v5c0 .55.45 1 1 1h9V5c0-1.1-.9-2-2-2Zm0 14h2v-2h-2v2ZM9 5h2V3H9v2ZM5 21h2v-2H5v2ZM5 5h2V3H5v2Zm16 16c1.1 0 2-.9 2-2h-2v2Zm0-8h2v-2h-2v2Zm-8 8h2v-2h-2v2Zm4 0h2v-2h-2v2Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgTabUnselected;
