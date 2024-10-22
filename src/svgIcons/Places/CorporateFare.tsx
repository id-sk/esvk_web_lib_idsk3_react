import * as React from 'react';
import { SVGProps } from 'react';

const SvgCorporateFare = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 7V5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2h-8Zm-2 12H4v-2h6v2Zm0-4H4v-2h6v2Zm0-4H4V9h6v2Zm0-4H4V5h6v2Zm10 12h-8V9h8v10Zm-2-8h-4v2h4v-2Zm0 4h-4v2h4v-2Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgCorporateFare;
