import * as React from 'react';
import { SVGProps } from 'react';

const SvgSensorWindow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M18 4v16H6V4h12Zm0-2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2ZM7 19h10v-6H7v6Zm3-9h4v1h3V5H7v6h3v-1Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgSensorWindow;
