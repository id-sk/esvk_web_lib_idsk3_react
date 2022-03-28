import * as React from 'react';
import { SVGProps } from 'react';

const SvgIso = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2ZM6.25 7.5H7.5V6.25c0-.41.34-.75.75-.75s.75.34.75.75V7.5h1.25c.41 0 .75.34.75.75s-.34.75-.75.75H9v1.25c0 .41-.34.75-.75.75s-.75-.34-.75-.75V9H6.25c-.41 0-.75-.34-.75-.75s.34-.75.75-.75ZM18 19H5L19 5v13c0 .55-.45 1-1 1Zm-1-2.75c0-.41-.34-.75-.75-.75h-3.5c-.41 0-.75.34-.75.75s.34.75.75.75h3.5c.41 0 .75-.34.75-.75Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgIso;
