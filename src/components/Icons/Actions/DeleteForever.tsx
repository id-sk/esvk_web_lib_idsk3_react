import * as React from 'react';
import { SVGProps } from 'react';

const SvgDeleteForever = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v10Zm3.17-7.83a.996.996 0 0 1 1.41 0L12 12.59l1.42-1.42a.996.996 0 1 1 1.41 1.41L13.41 14l1.42 1.42a.996.996 0 1 1-1.41 1.41L12 15.41l-1.42 1.42a.996.996 0 1 1-1.41-1.41L10.59 14l-1.42-1.42a.996.996 0 0 1 0-1.41ZM15.5 4l-.71-.71c-.18-.18-.44-.29-.7-.29H9.91c-.26 0-.52.11-.7.29L8.5 4H6c-.55 0-1 .45-1 1s.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1h-2.5Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgDeleteForever;
