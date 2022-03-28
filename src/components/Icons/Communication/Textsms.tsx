import * as React from 'react';
import { SVGProps } from 'react';

const SvgTextsms = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2ZM9 11H7V9h2v2Zm4 0h-2V9h2v2Zm4 0h-2V9h2v2Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgTextsms;
