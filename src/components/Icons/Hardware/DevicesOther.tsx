import * as React from 'react';
import { SVGProps } from 'react';

const SvgDevicesOther = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3 7c0-.55.45-1 1-1h16c.55 0 1-.45 1-1s-.45-1-1-1H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h3c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1-.45-1-1V7Zm9 5h-2c-.55 0-1 .45-1 1v.78c-.61.55-1 1.33-1 2.22 0 .89.39 1.67 1 2.22V19c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-.78c.61-.55 1-1.34 1-2.22 0-.88-.39-1.67-1-2.22V13c0-.55-.45-1-1-1Zm-1 5.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5ZM22 8h-6c-.5 0-1 .5-1 1v10c0 .5.5 1 1 1h6c.5 0 1-.5 1-1V9c0-.5-.5-1-1-1Zm-1 10h-4v-8h4v8Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgDevicesOther;
