import * as React from 'react';
import { SVGProps } from 'react';

const SvgSanitizer = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M15.5 6.5c0-.56.67-1.49 1.11-2.04.2-.25.58-.25.77 0 .44.55 1.11 1.48 1.11 2.04.01.83-.66 1.5-1.49 1.5s-1.5-.67-1.5-1.5Zm4 8.5a2.5 2.5 0 0 0 2.5-2.5c0-1.25-1.41-3.16-2.11-4.04a.489.489 0 0 0-.77 0c-.71.88-2.12 2.79-2.12 4.04a2.5 2.5 0 0 0 2.5 2.5ZM12 14h-1v-1c0-.55-.45-1-1-1s-1 .45-1 1v1H8c-.55 0-1 .45-1 1s.45 1 1 1h1v1c0 .55.45 1 1 1s1-.45 1-1v-1h1c.55 0 1-.45 1-1s-.45-1-1-1Zm4-2v8c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2v-8c0-2.97 2.16-5.43 5-5.91V4H8c-.55 0-1-.45-1-1s.45-1 1-1h5c.61 0 1.19.11 1.72.31.67.25.83 1.13.33 1.64a1 1 0 0 1-1.05.23c-.32-.12-.65-.18-1-.18h-2v2.09c2.84.48 5 2.94 5 5.91Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgSanitizer;