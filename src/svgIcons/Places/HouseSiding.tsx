import * as React from 'react';
import { SVGProps } from 'react';

const SvgHouseSiding = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M19 12h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1s1-.45 1-1v-1h10v1c0 .55.45 1 1 1s1-.45 1-1v-7ZM7.21 10h9.58l.21.19V12H7v-1.81l.21-.19Zm7.36-2H9.43L12 5.69 14.57 8ZM7 16v-2h10v2H7Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgHouseSiding;
