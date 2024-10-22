import * as React from 'react';
import { SVGProps } from 'react';

const SvgScreenLockRotation = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m22.3 13.77-1.86-1.87a.996.996 0 1 0-1.41 1.41l1.51 1.52-5.66 5.66L3.56 9.17l5.66-5.66 1.4 1.4a.996.996 0 1 0 1.41-1.41l-1.75-1.75a1.49 1.49 0 0 0-2.12 0L1.8 8.11a1.49 1.49 0 0 0 0 2.12l12.02 12.02c.59.59 1.54.59 2.12 0l6.36-6.36c.59-.59.59-1.54 0-2.12ZM15.05 10h5c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1v-.5a2.5 2.5 0 0 0-5 0V4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1Zm.8-6.5c0-.94.76-1.7 1.7-1.7s1.7.76 1.7 1.7V4h-3.4v-.5Zm-7 16.65-1.33 1.33a10.504 10.504 0 0 1-5.89-7.86.737.737 0 0 0-.86-.62c-.41.06-.69.45-.62.86.6 3.81 2.96 7.01 6.24 8.75 1.57.83 3.55 1.43 5.8 1.38.18 0 .26-.22.14-.35l-3.48-3.49Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgScreenLockRotation;
