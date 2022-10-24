import * as React from 'react';
import { SVGProps } from 'react';

const SvgGeneric = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#generic_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M0 0h24v24H0z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 4H8a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-6.995h-2V18H8V6h4v2a2 2 0 0 0 2 2h3.5a.5.5 0 0 0 .5-.5V8.213a.5.5 0 0 0-.145-.352L14.61 4.59A2 2 0 0 0 13.19 4H12ZM3 0h18a3 3 0 0 1 3 3v18a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3Z"
        fill="#5E6C84"
      />
    </g>
    <defs>
      <clipPath id="generic_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgGeneric;
