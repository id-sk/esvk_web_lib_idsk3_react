import * as React from 'react';
import { SVGProps } from 'react';

const SvgWordDocument = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#word-document_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M0 0h24v24H0z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 0h18a3 3 0 0 1 3 3v18a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3Zm1.376 6.013A.437.437 0 0 0 4 6.446v11.15c0 .219.161.404.378.434l11.125 1.538a.437.437 0 0 0 .497-.434V4.868a.437.437 0 0 0-.499-.434L4.376 6.014v-.001Zm5.629 5.324L8.687 16H7.295L5.43 8.954h1.533l1.099 4.966h.078l1.284-4.966h1.245l1.309 4.966h.078l1.089-4.966h1.523L12.798 16h-1.382l-1.333-4.663h-.078ZM17 7v10h2.5a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5H17Z"
        fill="#004E8C"
      />
    </g>
    <defs>
      <clipPath id="word-document_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgWordDocument;
