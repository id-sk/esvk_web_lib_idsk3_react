import * as React from 'react';
import { SVGProps } from 'react';

const SvgBento = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M16 11V5h4c1.1 0 2 .9 2 2v4h-6Zm4 8c1.1 0 2-.9 2-2v-4h-6v6h4ZM14 5v14H4c-1.1 0-2-.9-2-2V7c0-1.1.9-2 2-2h10Zm-4.5 7c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5.67 1.5 1.5 1.5 1.5-.67 1.5-1.5Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgBento;
