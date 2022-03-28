import * as React from 'react';
import { SVGProps } from 'react';

const SvgRateReview = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2ZM6 14v-2.47l6.88-6.88c.2-.2.51-.2.71 0l1.77 1.77c.2.2.2.51 0 .71L8.47 14H6Zm11 0h-6.5l2-2H17c.55 0 1 .45 1 1s-.45 1-1 1Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgRateReview;
