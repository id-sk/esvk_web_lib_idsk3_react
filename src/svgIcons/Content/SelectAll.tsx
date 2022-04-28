import * as React from 'react';
import { SVGProps } from 'react';

const SvgSelectAll = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3 5h2V3c-1.1 0-2 .9-2 2Zm0 8h2v-2H3v2Zm4 8h2v-2H7v2ZM3 9h2V7H3v2Zm10-6h-2v2h2V3Zm6 0v2h2c0-1.1-.9-2-2-2ZM5 21v-2H3c0 1.1.9 2 2 2Zm-2-4h2v-2H3v2ZM9 3H7v2h2V3Zm2 18h2v-2h-2v2Zm8-8h2v-2h-2v2Zm0 8c1.1 0 2-.9 2-2h-2v2Zm0-12h2V7h-2v2Zm0 8h2v-2h-2v2Zm-4 4h2v-2h-2v2Zm0-16h2V3h-2v2ZM8 17h8c.55 0 1-.45 1-1V8c0-.55-.45-1-1-1H8c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1Zm1-8h6v6H9V9Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgSelectAll;
