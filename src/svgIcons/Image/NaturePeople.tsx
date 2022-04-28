import * as React from 'react';
import { SVGProps } from 'react';

const SvgNaturePeople = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M4.5 11a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" fill="currentColor" />
    <path
      d="M22.17 9.17c0-3.91-3.19-7.06-7.11-7-3.83.06-6.99 3.37-6.88 7.19a6.986 6.986 0 0 0 5.83 6.7V20H6v-3h.5c.28 0 .5-.22.5-.5V13c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v3.5c0 .28.22.5.5.5H3v4c0 .55.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1h-2v-3.88a7 7 0 0 0 6.17-6.95Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgNaturePeople;
