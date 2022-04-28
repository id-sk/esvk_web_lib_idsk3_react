import * as React from 'react';
import { SVGProps } from 'react';

const SvgKeyboardHide = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M20 3H4c-1.1 0-1.99.9-1.99 2L2 15c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2Zm-9 3h2v2h-2V6Zm0 3h2v2h-2V9ZM8 6h2v2H8V6Zm0 3h2v2H8V9Zm-1 2H5V9h2v2Zm0-3H5V6h2v2Zm8 7H9c-.55 0-1-.45-1-1s.45-1 1-1h6c.55 0 1 .45 1 1s-.45 1-1 1Zm1-4h-2V9h2v2Zm0-3h-2V6h2v2Zm3 3h-2V9h2v2Zm0-3h-2V6h2v2Zm-6.65 14.65 2.79-2.79a.5.5 0 0 0-.35-.85H9.21c-.45 0-.67.54-.35.85l2.79 2.79c.19.19.51.19.7 0Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgKeyboardHide;
