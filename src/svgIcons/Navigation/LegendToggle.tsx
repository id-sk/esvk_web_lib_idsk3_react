import * as React from 'react';
import { SVGProps } from 'react';

const SvgLegendToggle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M19 15H5c-.55 0-1-.45-1-1s.45-1 1-1h14c.55 0 1 .45 1 1s-.45 1-1 1Zm0 2H5c-.55 0-1 .45-1 1s.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1Zm-4-6 4.58-3.25c.26-.19.42-.49.42-.81 0-.81-.92-1.29-1.58-.82L15 8.55 10 5 4.48 8.36c-.3.19-.48.51-.48.86 0 .78.85 1.26 1.52.85l4.4-2.68L15 11Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgLegendToggle;
