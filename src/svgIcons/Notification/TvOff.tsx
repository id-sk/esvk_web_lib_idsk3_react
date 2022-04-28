import * as React from 'react';
import { SVGProps } from 'react';

const SvgTvOff = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M21 8v9.88l1.85 1.85c.1-.22.15-.47.15-.73V7a2 2 0 0 0-2-2h-7.59l2.94-2.94c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0L12 4.99 8.36 1.35c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71L10.59 5H8.12l2 2H20c.55 0 1 .45 1 1ZM3.12 2.83a.996.996 0 1 0-1.41 1.41l.82.82C1.65 5.28 1 6.06 1 7v12c0 1.1.9 2 2 2h15.46l1.29 1.29c.39.39 1.02.39 1.41 0 .36-.36.37-.92.07-1.31h.03L3.12 2.83ZM3 18V8c0-.55.45-1 1-1h.46l12 12H4c-.55 0-1-.45-1-1Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgTvOff;
