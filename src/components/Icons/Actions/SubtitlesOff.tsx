import * as React from 'react';
import { SVGProps } from 'react';

const SvgSubtitlesOff = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M20 4H6.83l8 8H19c.55 0 1 .45 1 1s-.45 1-1 1h-2.17l4.93 4.93c.15-.28.24-.59.24-.93V6c0-1.1-.9-2-2-2ZM20 20l-6-6-1.71-1.71L12 12 3.16 3.16a.996.996 0 1 0-1.41 1.41l.49.49c-.15.29-.24.6-.24.94v12c0 1.1.9 2 2 2h13.17l2.25 2.25a.996.996 0 1 0 1.41-1.41L20 20ZM8 13c0 .55-.45 1-1 1H5c-.55 0-1-.45-1-1s.45-1 1-1h2c.55 0 1 .45 1 1Zm6 4c0 .55-.45 1-1 1H5c-.55 0-1-.45-1-1s.45-1 1-1h8c.08 0 .14.03.21.04l.74.74c.02.08.05.14.05.22Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgSubtitlesOff;