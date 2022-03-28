import * as React from 'react';
import { SVGProps } from 'react';

const SvgMoveToInbox = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M19 3H4.99C3.88 3 3 3.9 3 5v14c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2Zm0 12h-3.13c-.47 0-.85.34-.98.8A3.006 3.006 0 0 1 12 18c-1.37 0-2.54-.93-2.89-2.2-.13-.46-.51-.8-.98-.8H4.99V6c0-.55.45-1 1-1H18c.55 0 1 .45 1 1v9Zm-3-5h-2V7h-4v3H8l3.65 3.65c.2.2.51.2.71 0L16 10Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgMoveToInbox;
