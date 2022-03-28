import * as React from 'react';
import { SVGProps } from 'react';

const SvgTurnedInNot = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2Zm0 15-5-2.18L7 18V6c0-.55.45-1 1-1h8c.55 0 1 .45 1 1v12Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgTurnedInNot;
