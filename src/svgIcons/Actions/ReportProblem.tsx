import * as React from 'react';
import { SVGProps } from 'react';

const SvgReportProblem = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M2.73 21h18.53c.77 0 1.25-.83.87-1.5l-9.27-16a.996.996 0 0 0-1.73 0l-9.27 16c-.38.67.1 1.5.87 1.5ZM13 18h-2v-2h2v2Zm-1-4c-.55 0-1-.45-1-1v-2c0-.55.45-1 1-1s1 .45 1 1v2c0 .55-.45 1-1 1Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgReportProblem;
