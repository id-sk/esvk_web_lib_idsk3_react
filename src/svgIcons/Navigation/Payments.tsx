import * as React from 'react';
import { SVGProps } from 'react';

const SvgPayments = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M23 8v10c0 1.1-.9 2-2 2H5c-.55 0-1-.45-1-1s.45-1 1-1h16V8c0-.55.45-1 1-1s1 .45 1 1ZM4 16c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3h12c1.66 0 3 1.34 3 3v7c0 1.1-.9 2-2 2H4Zm3-6c0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3-3 1.34-3 3Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgPayments;
