import * as React from 'react';
import { SVGProps } from 'react';

const SvgTonality = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm-1 17.93c-3.94-.49-7-3.85-7-7.93s3.05-7.44 7-7.93v15.86Zm2-15.86c1.03.13 2 .45 2.87.93H13v-.93ZM13 7h5.24c.25.31.48.65.68 1H13V7Zm0 3h6.74c.08.33.15.66.19 1H13v-1Zm0 9.93V19h2.87c-.87.48-1.84.8-2.87.93ZM18.24 17H13v-1h5.92c-.2.35-.43.69-.68 1Zm1.5-3H13v-1h6.93c-.04.34-.11.67-.19 1Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgTonality;
