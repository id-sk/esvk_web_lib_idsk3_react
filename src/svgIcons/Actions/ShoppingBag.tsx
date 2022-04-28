import * as React from 'react';
import { SVGProps } from 'react';

const SvgShoppingBag = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M18 6h-2c0-2.21-1.79-4-4-4S8 3.79 8 6H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2Zm-8 4c0 .55-.45 1-1 1s-1-.45-1-1V8h2v2Zm2-6c1.1 0 2 .9 2 2h-4c0-1.1.9-2 2-2Zm4 6c0 .55-.45 1-1 1s-1-.45-1-1V8h2v2Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgShoppingBag;
