import * as React from 'react';
import { SVGProps } from 'react';

const SvgHowToVote = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M11.34 15.02c.39.39 1.02.39 1.41 0l6.36-6.36a.996.996 0 0 0 0-1.41L14.16 2.3a.975.975 0 0 0-1.4-.01L6.39 8.66a.996.996 0 0 0 0 1.41l4.95 4.95Zm2.12-10.61L17 7.95l-4.95 4.95-3.54-3.54 4.95-4.95Zm6.95 11-2.12-2.12c-.18-.18-.44-.29-.7-.29h-.27l-2 2h1.91L19 17H5l1.78-2h2.05l-2-2h-.42c-.27 0-.52.11-.71.29l-2.12 2.12c-.37.38-.58.89-.58 1.42V20c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-3.17c0-.53-.21-1.04-.59-1.42Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgHowToVote;
