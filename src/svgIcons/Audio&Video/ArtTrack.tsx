import * as React from 'react';
import { SVGProps } from 'react';

const SvgArtTrack = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M21 13h-6c-.55 0-1-.45-1-1s.45-1 1-1h6c.55 0 1 .45 1 1s-.45 1-1 1Zm0-6h-6c-.55 0-1 .45-1 1s.45 1 1 1h6c.55 0 1-.45 1-1s-.45-1-1-1Zm-6 10h6c.55 0 1-.45 1-1s-.45-1-1-1h-6c-.55 0-1 .45-1 1s.45 1 1 1Zm-3-8v6c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2Zm-2.1 5.2-1.26-1.68a.508.508 0 0 0-.8-.01L6.5 14.26l-.85-1.03a.5.5 0 0 0-.78.01l-.74.95a.5.5 0 0 0 .39.81H9.5a.5.5 0 0 0 .4-.8Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgArtTrack;
