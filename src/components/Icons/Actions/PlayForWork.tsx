import * as React from 'react';
import { SVGProps } from 'react';

const SvgPlayForWork = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M11 6v4.59H8.71c-.45 0-.67.54-.35.85l3.29 3.29c.2.2.51.2.71 0l3.29-3.29a.5.5 0 0 0-.35-.85H13V6c0-.55-.45-1-1-1s-1 .45-1 1Zm-3.9 8c-.61 0-1.11.55-.99 1.15A6.009 6.009 0 0 0 12 20c2.92 0 5.35-2.09 5.89-4.85.12-.6-.38-1.15-.99-1.15-.49 0-.88.35-.98.83A4.011 4.011 0 0 1 12 18c-1.93 0-3.53-1.36-3.91-3.17-.1-.48-.5-.83-.99-.83Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgPlayForWork;
