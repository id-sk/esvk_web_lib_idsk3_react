import * as React from 'react';
import { SVGProps } from 'react';

const SvgPriorityHigh = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM12 3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2s2-.9 2-2V5c0-1.1-.9-2-2-2Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgPriorityHigh;
