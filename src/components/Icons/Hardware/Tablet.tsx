import * as React from 'react';
import { SVGProps } from 'react';

const SvgTablet = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M21 4H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h18c1.1 0 1.99-.9 1.99-2L23 6c0-1.1-.9-2-2-2Zm-2 14H5V6h14v12Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgTablet;
