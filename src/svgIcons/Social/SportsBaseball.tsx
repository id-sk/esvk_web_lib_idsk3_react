import * as React from 'react';
import { SVGProps } from 'react';

const SvgSportsBaseball = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3.81 6.28A9.9 9.9 0 0 0 2 12c0 2.13.67 4.1 1.81 5.72C6.23 16.95 8 14.68 8 12c0-2.68-1.77-4.95-4.19-5.72ZM20.19 6.28C17.77 7.05 16 9.32 16 12c0 2.68 1.77 4.95 4.19 5.72A9.9 9.9 0 0 0 22 12a9.9 9.9 0 0 0-1.81-5.72Z"
      fill="currentColor"
    />
    <path
      d="M14 12c0-3.28 1.97-6.09 4.79-7.33A9.952 9.952 0 0 0 12 2C9.37 2 6.99 3.02 5.21 4.67A8.002 8.002 0 0 1 10 12c0 3.28-1.97 6.09-4.79 7.33A9.952 9.952 0 0 0 12 22c2.63 0 5.01-1.02 6.79-2.67A8.002 8.002 0 0 1 14 12Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgSportsBaseball;
