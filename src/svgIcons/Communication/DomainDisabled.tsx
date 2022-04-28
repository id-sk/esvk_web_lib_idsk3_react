import * as React from 'react';
import { SVGProps } from 'react';

const SvgDomainDisabled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M.71 2.39a.996.996 0 0 0 0 1.41L2 5.1V19c0 1.1.9 2 2 2h13.9l2.29 2.29a.996.996 0 1 0 1.41-1.41L2.12 2.39a.996.996 0 0 0-1.41 0ZM6 19H4v-2h2v2Zm0-4H4v-2h2v2Zm-2-4V9h2v2H4Zm6 8H8v-2h2v2Zm-2-4v-2h2v2H8Zm4 4v-2h1.9l2 2H12ZM8 5h2v2h-.45L12 9.45V9h7c.55 0 1 .45 1 1v7.45l2 2V9c0-1.1-.9-2-2-2h-8V5c0-1.1-.9-2-2-2H5.55L8 5.45V5Zm8 6h2v2h-2v-2Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgDomainDisabled;
