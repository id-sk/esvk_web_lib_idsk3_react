import * as React from 'react';
import { SVGProps } from 'react';

const SvgPdfDocument = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#pdf-document_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M0 0h24v24H0z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 0h18a3 3 0 0 1 3 3v18a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3Zm1.846 12.17h.483c1.116 0 1.203-.322 1.203-.776 0-.518-.268-.771-.817-.771h-.869v1.547Zm6.29 2.183h.664c.742 0 1.501-.22 1.501-1.855 0-1.65-.802-1.86-1.501-1.86h-.665v3.715h.001ZM4.462 15.99h-1.08A.384.384 0 0 1 3 15.606V9.383c0-.21.171-.383.383-.383h2.494c1.483 0 2.52.984 2.52 2.394 0 1.43-1.015 2.39-2.525 2.39H4.846v1.822a.384.384 0 0 1-.383.384h-.001Zm7.45 0h-2.24a.384.384 0 0 1-.384-.384V9.383c0-.21.172-.383.383-.383h2.242c2.107 0 3.268 1.237 3.268 3.484 0 2.26-1.16 3.506-3.268 3.506h-.001Zm5.776 0h-1.08a.383.383 0 0 1-.384-.384V9.383c0-.21.172-.383.383-.383h4.009c.21 0 .383.172.383.383v.88a.383.383 0 0 1-.383.383h-2.545v1.14h2.292c.212 0 .383.172.383.383v.867c0 .21-.171.383-.383.383h-2.292v2.187a.384.384 0 0 1-.383.384Z"
        fill="#FF5630"
      />
    </g>
    <defs>
      <clipPath id="pdf-document_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgPdfDocument;
