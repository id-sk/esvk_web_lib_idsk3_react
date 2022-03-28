import * as React from 'react';
import { SVGProps } from 'react';

const SvgSpeakerGroup = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M18.2 1H9.8C8.81 1 8 1.81 8 2.8v14.4c0 .99.81 1.79 1.8 1.79l8.4.01c.99 0 1.8-.81 1.8-1.8V2.8c0-.99-.81-1.8-1.8-1.8ZM14 3a2 2 0 1 1 .001 3.999A2 2 0 0 1 14 3Zm0 13.5c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4Z"
      fill="currentColor"
    />
    <path
      d="M14 15a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM5 5c-.55 0-1 .45-1 1v15a2 2 0 0 0 2 2h9c.55 0 1-.45 1-1s-.45-1-1-1H7c-.55 0-1-.45-1-1V6c0-.55-.45-1-1-1Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgSpeakerGroup;
