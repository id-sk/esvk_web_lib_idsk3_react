import * as React from 'react';
import { SVGProps } from 'react';

const SvgFiberSmartRecord = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M9 20A8 8 0 1 0 9 4a8 8 0 0 0 0 16Z" fill="currentColor" />
    <path
      d="M17 5.55v.18c0 .37.23.69.57.85C19.6 7.54 21 9.61 21 12s-1.4 4.46-3.43 5.42c-.34.16-.57.47-.57.84v.18c0 .68.71 1.11 1.32.82A7.966 7.966 0 0 0 23 12a7.99 7.99 0 0 0-4.68-7.27c-.61-.28-1.32.14-1.32.82Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgFiberSmartRecord;
