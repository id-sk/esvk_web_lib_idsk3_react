import * as React from 'react';
import { SVGProps } from 'react';

const SvgViewCompact = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M5 19h4v-7H3v5c0 1.1.9 2 2 2Zm5 0h10c1.1 0 2-.9 2-2v-5H10v7ZM3 7v4h19V7c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgViewCompact;
