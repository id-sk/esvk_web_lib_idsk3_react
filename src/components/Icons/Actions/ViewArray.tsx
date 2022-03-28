import * as React from 'react';
import { SVGProps } from 'react';

const SvgViewArray = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M5 18h1c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1v11c0 .55.45 1 1 1ZM18 6v11c0 .55.45 1 1 1h1c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1h-1c-.55 0-1 .45-1 1ZM9 18h7c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1H9c-.55 0-1 .45-1 1v11c0 .55.45 1 1 1Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgViewArray;
