import * as React from 'react';
import { SVGProps } from 'react';

const SvgChargingStation = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2Zm0 17H7V6h10v12Zm-4.5-7V9.12c0-.53-.71-.7-.95-.22l-1.69 3.38c-.16.33.08.72.45.72h1.19v1.88c0 .53.71.7.95.22l1.69-3.38a.502.502 0 0 0-.45-.72H12.5Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgChargingStation;
