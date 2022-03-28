import * as React from 'react';
import { SVGProps } from 'react';

const SvgAccountBox = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3 5v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5a2 2 0 0 0-2 2Zm12 4c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3Zm-9 8c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1H6v-1Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgAccountBox;
