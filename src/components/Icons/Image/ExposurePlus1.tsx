import * as React from 'react';
import { SVGProps } from 'react';

const SvgExposurePlus1 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M9 7c-.55 0-1 .45-1 1v3H5c-.55 0-1 .45-1 1s.45 1 1 1h3v3c0 .55.45 1 1 1s1-.45 1-1v-3h3c.55 0 1-.45 1-1s-.45-1-1-1h-3V8c0-.55-.45-1-1-1Zm11 11h-2V7.38L15 8.4V6.7L19.7 5h.3v13Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgExposurePlus1;
