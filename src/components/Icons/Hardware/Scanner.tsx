import * as React from 'react';
import { SVGProps } from 'react';

const SvgScanner = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M19.8 10.7 5.15 5.35c-.52-.19-1.1.08-1.3.6-.19.53.08 1.11.6 1.3L17.6 12H5c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-5.5c0-.8-.5-1.6-1.2-1.8ZM7 17H5v-2h2v2Zm11 0h-8c-.55 0-1-.45-1-1s.45-1 1-1h8c.55 0 1 .45 1 1s-.45 1-1 1Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgScanner;
