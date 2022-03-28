import * as React from 'react';
import { SVGProps } from 'react';

const SvgSwitchRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#switch_right_svg__a)">
      <path
        d="M15.5 15.38V8.62L18.88 12l-3.38 3.38Zm4.79-2.67a.996.996 0 0 0 0-1.41L15.7 6.71c-.62-.63-1.7-.19-1.7.7v9.17c0 .89 1.08 1.34 1.71.71l4.58-4.58ZM10 16.59V7.41c0-.89-1.08-1.34-1.71-.71L3.7 11.29a.996.996 0 0 0 0 1.41l4.59 4.59c.63.63 1.71.19 1.71-.7Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="switch_right_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgSwitchRight;
