import * as React from 'react';
import { SVGProps } from 'react';

const SvgWeb = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2ZM4 9h10.5v3.5H4V9Zm0 5.5h10.5V18H5c-.55 0-1-.45-1-1v-2.5ZM19 18h-2.5V9H20v8c0 .55-.45 1-1 1Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgWeb;
