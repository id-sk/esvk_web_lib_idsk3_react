import * as React from 'react';
import { SVGProps } from 'react';

const SvgBorderTop = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7 21h2v-2H7v2Zm0-8h2v-2H7v2Zm4 0h2v-2h-2v2Zm0 8h2v-2h-2v2Zm-8-4h2v-2H3v2Zm0 4h2v-2H3v2Zm0-8h2v-2H3v2Zm0-4h2V7H3v2Zm8 8h2v-2h-2v2Zm8-8h2V7h-2v2Zm0 4h2v-2h-2v2ZM3 4c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1Zm16 13h2v-2h-2v2Zm-4 4h2v-2h-2v2ZM11 9h2V7h-2v2Zm8 12h2v-2h-2v2Zm-4-8h2v-2h-2v2Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgBorderTop;
