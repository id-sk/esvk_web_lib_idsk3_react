import * as React from 'react';
import { SVGProps } from 'react';

const SvgDirectionsRailway = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4 15.5C4 17.43 5.57 19 7.5 19L6 20.5v.5h12v-.5L16.5 19c1.93 0 3.5-1.57 3.5-3.5V5c0-3.5-3.58-4-8-4s-8 .5-8 4v10.5Zm8 1.5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2Zm6-7H6V5h12v5ZM4 15.5C4 17.43 5.57 19 7.5 19l-1.14 1.15c-.32.31-.1.85.35.85h10.58c.45 0 .67-.54.35-.85L16.5 19c1.93 0 3.5-1.57 3.5-3.5V5c0-3.5-3.58-4-8-4s-8 .5-8 4v10.5Zm8 1.5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2Zm6-7H6V5h12v5Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgDirectionsRailway;
