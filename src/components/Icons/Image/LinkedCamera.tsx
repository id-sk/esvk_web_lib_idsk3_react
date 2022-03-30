import * as React from 'react';
import { SVGProps } from 'react';

const SvgLinkedCamera = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M12 17a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" fill="currentColor" />
    <path
      d="M16.6 3.37c2.1.27 3.77 1.93 4.03 4.03.04.34.32.6.66.6.39 0 .71-.34.66-.73a6.008 6.008 0 0 0-5.22-5.22c-.39-.05-.73.27-.73.66 0 .34.26.62.6.66Zm2.63 3.82a3.338 3.338 0 0 0-2.42-2.42c-.41-.1-.81.22-.81.65 0 .29.19.57.48.64.72.18 1.29.74 1.46 1.46.07.29.34.48.64.48.43 0 .75-.4.65-.81ZM17 9c0-1.1-.9-2-2-2V5c0-.55-.45-1-1-1H9.88c-.56 0-1.1.24-1.48.65L7.17 6H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-9c0-1.1-.9-2-2-2h-3Zm-5 10c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgLinkedCamera;