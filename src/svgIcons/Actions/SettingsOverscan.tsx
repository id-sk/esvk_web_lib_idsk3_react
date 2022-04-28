import * as React from 'react';
import { SVGProps } from 'react';

const SvgSettingsOverscan = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M11.62 5.99 10 8h4l-1.6-2.01a.5.5 0 0 0-.78 0ZM18 10v4l2.01-1.6a.5.5 0 0 0 0-.78L18 10ZM6 10l-2.01 1.62a.5.5 0 0 0 0 .78L6 14v-4Zm8 6h-4l1.62 2.01c.2.25.58.25.78 0L14 16Zm7-13H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2Zm-1 16.01H4c-.55 0-1-.45-1-1V5.99c0-.55.45-1 1-1h16c.55 0 1 .45 1 1v12.02c0 .55-.45 1-1 1Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgSettingsOverscan;
