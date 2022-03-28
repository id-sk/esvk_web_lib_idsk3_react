import * as React from 'react';
import { SVGProps } from 'react';

const SvgFilterBAndW = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2Zm0 16-7-8v8H5l7-8V5h6c.55 0 1 .45 1 1v13Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgFilterBAndW;
