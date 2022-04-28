import * as React from 'react';
import { SVGProps } from 'react';

const SvgSportsGolf = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 16c3.87 0 7-3.13 7-7s-3.13-7-7-7-7 3.13-7 7 3.13 7 7 7Zm0-12c2.76 0 5 2.24 5 5s-2.24 5-5 5-5-2.24-5-5 2.24-5 5-5Z"
      fill="currentColor"
    />
    <path
      d="M10 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM14 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM12 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM16 17H8c-.55 0-1 .45-1 1s.45 1 1 1h1c1.1 0 2 .9 2 2v1h2v-1c0-1.1.9-2 2-2h1c.55 0 1-.45 1-1s-.45-1-1-1Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgSportsGolf;
