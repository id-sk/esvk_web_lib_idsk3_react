import * as React from 'react';
import { SVGProps } from 'react';

const SvgEast = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M14.29 5.71a.996.996 0 0 0 0 1.41L18.17 11H3c-.55 0-1 .45-1 1s.45 1 1 1h15.18l-3.88 3.88a.996.996 0 1 0 1.41 1.41l5.59-5.59a.996.996 0 0 0 0-1.41l-5.6-5.58a.996.996 0 0 0-1.41 0Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgEast;