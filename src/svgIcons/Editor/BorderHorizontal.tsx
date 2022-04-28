import * as React from 'react';
import { SVGProps } from 'react';

const SvgBorderHorizontal = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3 21h2v-2H3v2ZM5 7H3v2h2V7ZM3 17h2v-2H3v2Zm4 4h2v-2H7v2ZM5 3H3v2h2V3Zm4 0H7v2h2V3Zm8 0h-2v2h2V3Zm-4 4h-2v2h2V7Zm0-4h-2v2h2V3Zm6 14h2v-2h-2v2Zm-8 4h2v-2h-2v2Zm-7-8h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1ZM19 3v2h2V3h-2Zm0 6h2V7h-2v2Zm-8 8h2v-2h-2v2Zm4 4h2v-2h-2v2Zm4 0h2v-2h-2v2Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgBorderHorizontal;
