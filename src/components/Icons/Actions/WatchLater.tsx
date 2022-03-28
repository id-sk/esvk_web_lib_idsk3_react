import * as React from 'react';
import { SVGProps } from 'react';

const SvgWatchLater = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2Zm3.55 13.8-4.08-2.51c-.3-.18-.48-.5-.48-.85V7.75a.77.77 0 0 1 .76-.75c.41 0 .75.34.75.75v4.45l3.84 2.31c.36.22.48.69.26 1.05-.22.35-.69.46-1.05.24Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgWatchLater;
