import * as React from 'react';
import { SVGProps } from 'react';

const SvgKitchen = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M18 2.01 6 2a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.11-.9-1.99-2-1.99ZM17 20H7c-.55 0-1-.45-1-1v-7.02c0-.55.45-1 1-1h10c.55 0 1 .45 1 1V19c0 .55-.45 1-1 1Zm0-11H7c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1h10c.55 0 1 .45 1 1v3c0 .55-.45 1-1 1ZM9 5c.55 0 1 .45 1 1v1c0 .55-.45 1-1 1s-1-.45-1-1V6c0-.55.45-1 1-1Zm0 7c.55 0 1 .45 1 1v3c0 .55-.45 1-1 1s-1-.45-1-1v-3c0-.55.45-1 1-1Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgKitchen;
