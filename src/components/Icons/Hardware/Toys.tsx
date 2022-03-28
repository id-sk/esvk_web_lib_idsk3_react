import * as React from 'react';
import { SVGProps } from 'react';

const SvgToys = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 12c0-3 2.5-5.5 5.5-5.5 2.57 0 4.77 1.83 5.35 4.24.15.64-.32 1.26-.97 1.26H12Zm0 0c0 3-2.5 5.5-5.5 5.5-2.57 0-4.77-1.83-5.35-4.24-.15-.64.32-1.26.97-1.26H12Zm0 0c-3 0-5.5-2.5-5.5-5.5 0-2.57 1.83-4.77 4.24-5.35.64-.15 1.26.32 1.26.97V12Zm0 0c3 0 5.5 2.5 5.5 5.5 0 2.57-1.83 4.77-4.24 5.35-.64.15-1.26-.32-1.26-.97V12Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgToys;
