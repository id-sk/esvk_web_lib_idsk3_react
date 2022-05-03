import * as React from 'react';
import { SVGProps } from 'react';

const SvgCalendarViewDay = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4 17h16c.55 0 1 .45 1 1s-.45 1-1 1H4c-.55 0-1-.45-1-1s.45-1 1-1Zm0-7h16c.55 0 1 .45 1 1v3c0 .55-.45 1-1 1H4c-.55 0-1-.45-1-1v-3c0-.55.45-1 1-1Zm0-4h16c.55 0 1 .45 1 1s-.45 1-1 1H4c-.55 0-1-.45-1-1s.45-1 1-1Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgCalendarViewDay;