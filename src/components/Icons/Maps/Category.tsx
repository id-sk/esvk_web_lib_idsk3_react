import * as React from 'react';
import { SVGProps } from 'react';

const SvgCategory = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M11.15 3.4 7.43 9.48c-.41.66.07 1.52.85 1.52h7.43c.78 0 1.26-.86.85-1.52L12.85 3.4a.993.993 0 0 0-1.7 0ZM17.5 22a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM4 21.5h6c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgCategory;
