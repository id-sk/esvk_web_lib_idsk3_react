import * as React from 'react';
import { SVGProps } from 'react';

const SvgLocalConvenienceStore = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M21 7h-2V5c0-.55-.45-1-1-1H6c-.55 0-1 .45-1 1v2H3c-.55 0-1 .45-1 1v11c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-3h4v3c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V8c0-.55-.45-1-1-1ZM11 9c0 .55-.45 1-1 1H9v1h1.5c.28 0 .5.22.5.5s-.22.5-.5.5H9c-.55 0-1-.45-1-1v-1c0-.55.45-1 1-1h1V8H8.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5H10c.55 0 1 .45 1 1v1Zm5 2.5c0 .28-.22.5-.5.5s-.5-.22-.5-.5V10h-1c-.55 0-1-.45-1-1V7.5c0-.28.22-.5.5-.5s.5.22.5.5V9h1V7.5c0-.28.22-.5.5-.5s.5.22.5.5v4Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgLocalConvenienceStore;
