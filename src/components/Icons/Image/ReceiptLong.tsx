import * as React from 'react';
import { SVGProps } from 'react';

const SvgReceiptLong = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M14 9h-4c-.55 0-1-.45-1-1s.45-1 1-1h4c.55 0 1 .45 1 1s-.45 1-1 1ZM14 12h-4c-.55 0-1-.45-1-1s.45-1 1-1h4c.55 0 1 .45 1 1s-.45 1-1 1Z"
      fill="currentColor"
    />
    <path
      d="M19.5 3.5 18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2 7.5 3.5 6 2v14H4c-.55 0-1 .45-1 1v2c0 1.66 1.34 3 3 3h12c1.66 0 3-1.34 3-3V2l-1.5 1.5ZM15 20H6c-.55 0-1-.45-1-1v-1h10v2Zm4-1c0 .55-.45 1-1 1s-1-.45-1-1v-2c0-.55-.45-1-1-1H8V5h11v14Z"
      fill="currentColor"
    />
    <path
      d="M17 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM17 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgReceiptLong;
