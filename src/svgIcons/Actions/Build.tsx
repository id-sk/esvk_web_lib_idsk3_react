import * as React from 'react';
import { SVGProps } from 'react';

const SvgBuild = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12.09 2.91C10.08.9 7.07.49 4.65 1.67L8.28 5.3c.39.39.39 1.02 0 1.41L6.69 8.3c-.39.4-1.02.4-1.41 0L1.65 4.67C.48 7.1.89 10.09 2.9 12.1a6.507 6.507 0 0 0 6.89 1.48l7.96 7.96a2.613 2.613 0 0 0 3.71 0 2.613 2.613 0 0 0 0-3.71L13.54 9.9c.92-2.34.44-5.1-1.45-6.99Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgBuild;
