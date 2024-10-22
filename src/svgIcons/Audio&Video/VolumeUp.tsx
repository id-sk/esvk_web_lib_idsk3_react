import * as React from 'react';
import { SVGProps } from 'react';

const SvgVolumeUp = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3 10v4c0 .55.45 1 1 1h3l3.29 3.29c.63.63 1.71.18 1.71-.71V6.41c0-.89-1.08-1.34-1.71-.71L7 9H4c-.55 0-1 .45-1 1Zm13.5 2A4.5 4.5 0 0 0 14 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02ZM14 4.45v.2c0 .38.25.71.6.85A7.004 7.004 0 0 1 19 12c0 2.94-1.82 5.47-4.4 6.5-.36.14-.6.47-.6.85v.2c0 .63.63 1.07 1.21.85A8.98 8.98 0 0 0 21 12c0-3.84-2.4-7.11-5.79-8.4-.58-.23-1.21.22-1.21.85Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgVolumeUp;
