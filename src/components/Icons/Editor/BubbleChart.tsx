import * as React from 'react';
import { SVGProps } from 'react';

const SvgBubbleChart = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7.2 17.6a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4ZM14.8 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM15.2 13.6a4.8 4.8 0 1 0 0-9.6 4.8 4.8 0 0 0 0 9.6Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgBubbleChart;
