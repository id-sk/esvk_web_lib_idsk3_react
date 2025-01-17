import * as React from 'react';
import { SVGProps } from 'react';

const SvgPersonPinCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 11c-1.33 0-4 .67-4 2v.16c.97 1.12 2.4 1.84 4 1.84s3.03-.72 4-1.84V13c0-1.33-2.67-2-4-2Zm0-1c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2Zm0-8c4.2 0 8 3.22 8 8.2 0 3.18-2.45 6.92-7.34 11.23-.38.33-.95.33-1.33 0C6.45 17.12 4 13.38 4 10.2 4 5.22 7.8 2 12 2Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgPersonPinCircle;
