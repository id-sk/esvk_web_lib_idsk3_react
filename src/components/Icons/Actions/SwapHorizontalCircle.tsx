import * as React from 'react';
import { SVGProps } from 'react';

const SvgSwapHorizontalCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12s4.48 10 10 10 10-4.48 10-10Zm-7-5.5 3.15 3.15c.2.2.2.51 0 .71L15 13.5V11h-4V9h4V6.5Zm-6 11-3.15-3.15c-.2-.2-.2-.51 0-.71L9 10.5V13h4v2H9v2.5Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgSwapHorizontalCircle;
