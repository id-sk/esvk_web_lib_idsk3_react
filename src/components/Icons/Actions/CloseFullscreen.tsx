import * as React from 'react';
import { SVGProps } from 'react';

const SvgCloseFullscreen = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M21.29 4.12 16.7 8.71l1.59 1.59c.63.63.18 1.71-.71 1.71H13c-.55 0-1-.45-1-1v-4.6c0-.89 1.08-1.34 1.71-.71l1.59 1.59 4.59-4.59a.996.996 0 0 1 1.41 0c.38.4.38 1.03-.01 1.42ZM4.12 21.29l4.59-4.59 1.59 1.59c.63.63 1.71.18 1.71-.71V13c0-.55-.45-1-1-1h-4.6c-.89 0-1.34 1.08-.71 1.71l1.59 1.59-4.59 4.59a.996.996 0 0 0 0 1.41c.4.38 1.03.38 1.42-.01Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgCloseFullscreen;