import * as React from 'react';
import { SVGProps } from 'react';

const SvgBackupTable = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M20 7v12c0 .55-.45 1-1 1H7c-.55 0-1 .45-1 1s.45 1 1 1h13c1.1 0 2-.9 2-2V7c0-.55-.45-1-1-1s-1 .45-1 1Z"
      fill="currentColor"
    />
    <path
      d="M16 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2ZM9 16H4v-5h5v5Zm7 0h-5v-5h5v5Zm0-7H4V4h12v5Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgBackupTable;
