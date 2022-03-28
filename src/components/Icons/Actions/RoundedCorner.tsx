import * as React from 'react';
import { SVGProps } from 'react';

const SvgRoundedCorner = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M19 19h2v2h-2v-2Zm0-2h2v-2h-2v2ZM3 13h2v-2H3v2Zm0 4h2v-2H3v2Zm0-8h2V7H3v2Zm0-4h2V3H3v2Zm4 0h2V3H7v2Zm8 16h2v-2h-2v2Zm-4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm-8 0h2v-2H7v2Zm-4 0h2v-2H3v2ZM21 8c0-2.76-2.24-5-5-5h-5v2h5c1.65 0 3 1.35 3 3v5h2V8Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgRoundedCorner;
