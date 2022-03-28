import * as React from 'react';
import { SVGProps } from 'react';

const SvgStayPrimaryLandscape = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1.01 7 1 17c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2H3c-1.1 0-1.99.9-1.99 2ZM19 7v10H5V7h14Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgStayPrimaryLandscape;
