import * as React from 'react';
import { SVGProps } from 'react';

const SvgCarpenter = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M19.73 14.23 7.71 2.21a.996.996 0 0 0-1.41 0L3.7 4.8a1 1 0 0 0-.11 1.28l7.65 10.98c-.78.78-.78 2.05 0 2.83l1.41 1.41c.78.78 2.05.78 2.83 0l4.24-4.24c.79-.78.79-2.05.01-2.83Zm-5.66 5.65-1.41-1.41 4.24-4.24 1.41 1.41-4.24 4.24Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgCarpenter;
