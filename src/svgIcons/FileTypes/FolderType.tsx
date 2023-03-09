import * as React from 'react';
import { SVGProps } from 'react';

const SvgFolder = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="#fff" fillOpacity={0.01} d="M0 0h24v24H0z" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 4h12a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2Z"
      fill="#B3D4FF"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 6h24v14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6Z"
      fill="#B3D4FF"
      style={{
        mixBlendMode: 'multiply'
      }}
    />
  </svg>
);

export default SvgFolder;
