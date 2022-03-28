import * as React from 'react';
import { SVGProps } from 'react';

const SvgSportsFootball = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3.02 15.62c-.08 2.42.32 4.34.67 4.69.35.35 2.28.76 4.69.67l-5.36-5.36ZM13.08 3.28c-2.33.42-4.79 1.34-6.62 3.18s-2.76 4.29-3.18 6.62l7.63 7.63c2.34-.41 4.79-1.34 6.62-3.18s2.76-4.29 3.18-6.62l-7.63-7.63Zm1.72 7.32-4.2 4.2a.984.984 0 0 1-1.4 0 .984.984 0 0 1 0-1.4l4.2-4.2a.984.984 0 0 1 1.4 0c.39.39.39 1.01 0 1.4ZM20.98 8.38c.08-2.42-.32-4.34-.67-4.69-.35-.35-2.28-.76-4.69-.67l5.36 5.36Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgSportsFootball;
