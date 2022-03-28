import * as React from 'react';
import { SVGProps } from 'react';

const SvgScatterPlot = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7 17a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM11 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM16.6 20.6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgScatterPlot;
