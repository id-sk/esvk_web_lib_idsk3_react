import * as React from 'react';
import { SVGProps } from 'react';

const SvgFormatStrikethrough = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 19c1.1 0 2-.9 2-2v-1h-4v1c0 1.1.9 2 2 2ZM5 5.5C5 6.33 5.67 7 6.5 7H10v3h4V7h3.5c.83 0 1.5-.67 1.5-1.5S18.33 4 17.5 4h-11C5.67 4 5 4.67 5 5.5ZM4 14h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgFormatStrikethrough;
