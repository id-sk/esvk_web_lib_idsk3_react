import * as React from 'react';
import { SVGProps } from 'react';

const SvgLocalPharmacy = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M18.89 5h-.53l.71-1.97c.24-.65-.1-1.37-.75-1.6-.65-.24-1.37.1-1.61.75L15.69 5H5.1a2 2 0 0 0-1.9 2.63L5 13l-1.79 5.37C2.77 19.66 3.74 21 5.1 21h13.78c1.36 0 2.33-1.34 1.9-2.63L19 13l1.78-5.37C21.21 6.34 20.25 5 18.89 5ZM15 14h-2v2c0 .55-.45 1-1 1s-1-.45-1-1v-2H9c-.55 0-1-.45-1-1s.45-1 1-1h2v-2c0-.55.45-1 1-1s1 .45 1 1v2h2c.55 0 1 .45 1 1s-.45 1-1 1Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgLocalPharmacy;