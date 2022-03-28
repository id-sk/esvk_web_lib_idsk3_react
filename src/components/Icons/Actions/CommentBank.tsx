import * as React from 'react';
import { SVGProps } from 'react';

const SvgCommentBank = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2Zm-1 11-2.5-1.5L14 13V5h5v8Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgCommentBank;
