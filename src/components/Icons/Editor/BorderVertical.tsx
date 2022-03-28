import * as React from 'react';
import { SVGProps } from 'react';

const SvgBorderVertical = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3 9h2V7H3v2Zm0-4h2V3H3v2Zm4 16h2v-2H7v2Zm0-8h2v-2H7v2Zm-4 0h2v-2H3v2Zm0 8h2v-2H3v2Zm0-4h2v-2H3v2ZM7 5h2V3H7v2Zm12 12h2v-2h-2v2Zm-7 4c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1s-1 .45-1 1v16c0 .55.45 1 1 1Zm7 0h2v-2h-2v2Zm0-8h2v-2h-2v2Zm0-10v2h2V3h-2Zm0 6h2V7h-2v2Zm-4-4h2V3h-2v2Zm0 16h2v-2h-2v2Zm0-8h2v-2h-2v2Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgBorderVertical;
