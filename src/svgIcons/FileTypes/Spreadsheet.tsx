import * as React from 'react';
import { SVGProps } from 'react';

const SvgSpreadsheet = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#spreadsheet_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M0 0h24v24H0z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 0h18a3 3 0 0 1 3 3v18a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3Zm2 5a1 1 0 0 0 0 2h3a1 1 0 0 0 0-2H5Zm0 4a1 1 0 0 0 0 2h3a1 1 0 0 0 0-2H5Zm0 4a1 1 0 0 0 0 2h3a1 1 0 0 0 0-2H5Zm0 4a1 1 0 0 0 0 2h3a1 1 0 0 0 0-2H5Zm7-12a1 1 0 1 0 0 2h7a1 1 0 1 0 0-2h-7Zm0 4a1 1 0 1 0 0 2h7a1 1 0 0 0 0-2h-7Zm0 4a1 1 0 0 0 0 2h7a1 1 0 0 0 0-2h-7Zm0 4a1 1 0 0 0 0 2h7a1 1 0 0 0 0-2h-7Z"
        fill="#36B37E"
      />
    </g>
    <defs>
      <clipPath id="spreadsheet_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgSpreadsheet;
