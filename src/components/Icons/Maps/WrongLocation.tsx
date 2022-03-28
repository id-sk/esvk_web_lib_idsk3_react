import * as React from 'react';
import { SVGProps } from 'react';

const SvgWrongLocation = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M14 10V3.26c-.65-.17-1.32-.26-2-.26-4.2 0-8 3.22-8 8.2 0 3.18 2.45 6.92 7.34 11.23.38.33.95.33 1.33 0C17.55 18.12 20 14.38 20 11.2c0-.41-.04-.81-.09-1.2H14Zm-2 3c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2Z"
      fill="currentColor"
    />
    <path
      d="m22.54 2.88-1.42-1.42L19 3.59l-2.12-2.13-1.42 1.42L17.59 5l-2.13 2.12 1.42 1.42L19 6.41l2.12 2.13 1.42-1.42L20.41 5l2.13-2.12Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgWrongLocation;
