import * as React from 'react';
import { SVGProps } from 'react';

const SvgViewStream = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M5 18h15c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1ZM4 6v4c0 .55.45 1 1 1h15c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgViewStream;
