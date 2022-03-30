import * as React from 'react';
import { SVGProps } from 'react';

const SvgUnsubscribe = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M18.5 11.5c.92 0 1.75.26 2.49.69V5c0-1.1-.89-2-1.99-2H5c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h8.55c-.02-.17-.05-.33-.05-.5 0-2.76 2.24-5 5-5Zm-5.61-1.45c-.56.28-1.23.28-1.79 0l-5.61-2.8a.893.893 0 0 1-.49-.8c0-.66.7-1.1 1.29-.8L12 8.5l5.71-2.85a.89.89 0 0 1 1.29.8c0 .34-.19.65-.49.8l-5.62 2.8ZM18.5 13c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5 3.5-1.57 3.5-3.5-1.57-3.5-3.5-3.5Zm2 3.5c0 .28-.22.5-.5.5h-3c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h3c.28 0 .5.22.5.5Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgUnsubscribe;