import * as React from 'react';
import { SVGProps } from 'react';

const SvgImage = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#image_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M0 0h24v24H0z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 0h18a3 3 0 0 1 3 3v18a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3Zm7 17-1.293-1.293a1 1 0 0 0-1.414 0L4 19h16v-3.6l-3.295-3.624a1 1 0 0 0-1.447-.034L10 17Zm-3.333-6.667a2.665 2.665 0 0 0 2.719-2.667 2.667 2.667 0 1 0-2.719 2.667Z"
        fill="#FFAB00"
      />
    </g>
    <defs>
      <clipPath id="image_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgImage;
