import * as React from 'react';
import { SVGProps } from 'react';

const SvgBorderClear = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7 5h2V3H7v2Zm0 8h2v-2H7v2Zm0 8h2v-2H7v2Zm4-4h2v-2h-2v2Zm0 4h2v-2h-2v2Zm-8 0h2v-2H3v2Zm0-4h2v-2H3v2Zm0-4h2v-2H3v2Zm0-4h2V7H3v2Zm0-4h2V3H3v2Zm8 8h2v-2h-2v2Zm8 4h2v-2h-2v2Zm0-4h2v-2h-2v2Zm0 8h2v-2h-2v2Zm0-12h2V7h-2v2Zm-8 0h2V7h-2v2Zm8-6v2h2V3h-2Zm-8 2h2V3h-2v2Zm4 16h2v-2h-2v2Zm0-8h2v-2h-2v2Zm0-8h2V3h-2v2Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgBorderClear;
