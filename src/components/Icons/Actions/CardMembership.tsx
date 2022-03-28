import * as React from 'react';
import { SVGProps } from 'react';

const SvgCardMembership = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M20 2H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h4v5l4-2 4 2v-5h4c1.11 0 2-.89 2-2V4c0-1.11-.89-2-2-2Zm0 13H4v-2h16v2Zm0-5H4V5c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v5Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgCardMembership;
