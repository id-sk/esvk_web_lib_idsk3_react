import * as React from 'react';
import { SVGProps } from 'react';

const SvgElectricMoped = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M19 5c0-1.1-.9-2-2-2h-2c-.55 0-1 .45-1 1s.45 1 1 1h2v2.65L13.52 12H10V8c0-.55-.45-1-1-1H6c-2.21 0-4 1.79-4 4v3h2c0 1.66 1.34 3 3 3s3-1.34 3-3h4.48L19 8.35V5ZM7 15c-.55 0-1-.45-1-1h2c0 .55-.45 1-1 1Z"
      fill="currentColor"
    />
    <path
      d="M9 4H6c-.55 0-1 .45-1 1s.45 1 1 1h3c.55 0 1-.45 1-1s-.45-1-1-1ZM19 11c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3Zm0 4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1ZM7 20h4v-2l6 3h-4v2l-6-3Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgElectricMoped;
