import * as React from 'react';
import { SVGProps } from 'react';

const SvgImageAspectRatio = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M16 10h-2v2h2v-2Zm0 4h-2v2h2v-2Zm-8-4H6v2h2v-2Zm4 0h-2v2h2v-2Zm8-6H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2Zm-1 14H5c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v10c0 .55-.45 1-1 1Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgImageAspectRatio;
