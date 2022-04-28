import * as React from 'react';
import { SVGProps } from 'react';

const SvgAllOut = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4 4.5V8l4-4H4.5c-.28 0-.5.22-.5.5ZM16 4l4 4V4.5c0-.28-.22-.5-.5-.5H16Zm4 15.5V16l-4 4h3.5c.28 0 .5-.22.5-.5ZM4.5 20H8l-4-4v3.5c0 .28.22.5.5.5ZM19 12c0-3.87-3.13-7-7-7s-7 3.13-7 7 3.13 7 7 7 7-3.13 7-7Zm-7 5c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgAllOut;
