import * as React from 'react';
import { SVGProps } from 'react';

const SvgMusicOff = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M14 9.61V7h2c1.1 0 2-.9 2-2s-.9-2-2-2h-3c-.55 0-1 .45-1 1v3.61l2 2ZM5.12 3.56a.996.996 0 1 0-1.41 1.41l8.29 8.3v.28c-.94-.54-2.1-.75-3.33-.32-1.34.48-2.37 1.67-2.61 3.07a4.007 4.007 0 0 0 4.59 4.65c1.96-.31 3.35-2.11 3.35-4.1v-1.58l5.02 5.02a.996.996 0 1 0 1.41-1.41L5.12 3.56Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgMusicOff;
