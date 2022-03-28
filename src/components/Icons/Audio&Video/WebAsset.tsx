import * as React from 'react';
import { SVGProps } from 'react';

const SvgWebAsset = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M19 4H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6a2 2 0 0 0-2-2Zm-1 14H6c-.55 0-1-.45-1-1V8h14v9c0 .55-.45 1-1 1Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgWebAsset;
