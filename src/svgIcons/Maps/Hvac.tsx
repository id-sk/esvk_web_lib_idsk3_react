import * as React from 'react';
import { SVGProps } from 'react';

const SvgHvac = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 16c1.01 0 1.91-.39 2.62-1H9.38c.71.61 1.61 1 2.62 1ZM8.56 14h6.89c.26-.45.44-.96.51-1.5h-7.9c.06.54.23 1.05.5 1.5ZM12 8c-1.01 0-1.91.39-2.62 1h5.24c-.71-.61-1.61-1-2.62-1ZM8.56 10c-.26.45-.44.96-.51 1.5h7.9c-.07-.54-.24-1.05-.51-1.5H8.56Z"
      fill="currentColor"
    />
    <path
      d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2Zm-7 15c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgHvac;
