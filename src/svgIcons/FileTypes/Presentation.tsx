import * as React from 'react';
import { SVGProps } from 'react';

const SvgPresentation = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#presentation_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M0 0h24v24H0z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 0h18a3 3 0 0 1 3 3v18a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3Zm3 14a1 1 0 0 0-1 1v3a1 1 0 1 0 2 0v-3a1 1 0 0 0-1-1Zm8-6a1 1 0 0 0-1 1v9a1 1 0 0 0 2 0V9a1 1 0 0 0-1-1Zm-4 4a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-5a1 1 0 0 0-1-1Zm8-7a1 1 0 0 0-1 1v12a1 1 0 0 0 2 0V6a1 1 0 0 0-1-1Z"
        fill="#6554C0"
      />
    </g>
    <defs>
      <clipPath id="presentation_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgPresentation;
