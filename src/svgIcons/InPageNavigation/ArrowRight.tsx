import * as React from 'react';
import { SVGProps } from 'react';

const SvgArrowRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="10"
    height="12"
    viewBox="0 0 10 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M0.666656 1.68332V10.3167C0.666656 10.975 1.39166 11.375 1.94999 11.0167L8.73332 6.69999C9.24999 6.37499 9.24999 5.62499 8.73332 5.29165L1.94999 0.98332C1.39166 0.624986 0.666656 1.02499 0.666656 1.68332Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgArrowRight;