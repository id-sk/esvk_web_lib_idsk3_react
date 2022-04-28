import * as React from 'react';
import { SVGProps } from 'react';

const SvgOutlet = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2ZM9 12c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1s1 .45 1 1v3c0 .55-.45 1-1 1Zm4 6h-2c-.55 0-1-.45-1-1v-.89c0-1 .68-1.92 1.66-2.08A2 2 0 0 1 14 16v1c0 .55-.45 1-1 1Zm3-7c0 .55-.45 1-1 1s-1-.45-1-1V8c0-.55.45-1 1-1s1 .45 1 1v3Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgOutlet;
