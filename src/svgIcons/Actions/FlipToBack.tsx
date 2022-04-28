import * as React from 'react';
import { SVGProps } from 'react';

const SvgFlipToBack = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M9 7H7v2h2V7Zm0 4H7v2h2v-2Zm0-8a2 2 0 0 0-2 2h2V3Zm4 12h-2v2h2v-2Zm6-12v2h2c0-1.1-.9-2-2-2Zm-6 0h-2v2h2V3ZM9 17v-2H7a2 2 0 0 0 2 2Zm10-4h2v-2h-2v2Zm0-4h2V7h-2v2Zm0 8c1.1 0 2-.9 2-2h-2v2ZM4 7c-.55 0-1 .45-1 1v11c0 1.1.9 2 2 2h11c.55 0 1-.45 1-1s-.45-1-1-1H6c-.55 0-1-.45-1-1V8c0-.55-.45-1-1-1Zm11-2h2V3h-2v2Zm0 12h2v-2h-2v2Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgFlipToBack;
