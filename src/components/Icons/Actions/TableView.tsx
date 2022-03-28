import * as React from 'react';
import { SVGProps } from 'react';

const SvgTableView = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M19 7H9c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2Zm0 3c0 .55-.45 1-1 1h-8c-.55 0-1-.45-1-1s.45-1 1-1h8c.55 0 1 .45 1 1Zm-6 5v-2h2v2h-2Zm2 2v2h-2v-2h2Zm-4-2H9v-2h2v2Zm6-2h2v2h-2v-2Zm-8 4h2v2H9v-2Zm8 2v-2h2v2h-2ZM6 17H5c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2v1h-2V5H5v10h1v2Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgTableView;
