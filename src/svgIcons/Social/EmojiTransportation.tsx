import * as React from 'react';
import { SVGProps } from 'react';

const SvgEmojiTransportation = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m21.99 14.77-1.43-4.11c-.14-.4-.52-.66-.97-.66H12.4c-.46 0-.83.26-.98.66L10 14.77v5.24c0 .55.45.99 1 .99s1-.45 1-1v-1h8v1a1 1 0 0 0 2 .01l-.01-5.24Zm-10.38-1.43.69-2c.05-.2.24-.34.46-.34h6.48c.21 0 .4.14.47.34l.69 2a.5.5 0 0 1-.47.66h-7.85a.5.5 0 0 1-.47-.66Zm.38 3.66c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1Zm8 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1Z"
      fill="currentColor"
    />
    <path
      d="M14 4.5V9h1V4c0-.55-.45-1-1-1H8c-.55 0-1 .45-1 1v4H3c-.55 0-1 .45-1 1v12h1V9.5c0-.28.22-.5.5-.5h4c.28 0 .5-.22.5-.5v-4c0-.28.22-.5.5-.5h5c.28 0 .5.22.5.5Z"
      fill="currentColor"
    />
    <path d="M7 11H5v2h2v-2ZM12 5h-2v2h2V5ZM7 15H5v2h2v-2ZM7 19H5v2h2v-2Z" fill="currentColor" />
  </svg>
);

export default SvgEmojiTransportation;
