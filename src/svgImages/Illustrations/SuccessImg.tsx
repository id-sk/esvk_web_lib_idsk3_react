import * as React from 'react';
import { SVGProps } from 'react';

const SvgSuccessImg = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 99 90" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="m75.086 17.543-21.528-5.428c-7.808-1.969-13.58 1.187-15.68 8.56L30.77 45.643c-2.133 7.493 1.216 12.845 9.024 14.814l21.528 5.428c7.934 2.001 13.55-1.09 15.683-8.584l7.11-24.968c2.099-7.373-1.094-12.79-9.028-14.79Z"
      fill="url(#success_img_svg__a)"
    />
    <g opacity={0.5} filter="url(#success_img_svg__b)">
      <path
        d="m69.46 24.38-14.667-3.697c-5.32-1.342-9.253.808-10.683 5.831l-4.844 17.012c-1.453 5.105.828 8.751 6.148 10.092l14.667 3.699c5.406 1.363 9.232-.744 10.685-5.849l4.844-17.011c1.43-5.023-.745-8.713-6.15-10.076Z"
        fill="#39B93A"
        fillOpacity={0.04}
      />
    </g>
    <mask
      id="success_img_svg__d"
      maskUnits="userSpaceOnUse"
      x={8.5}
      y={21.212}
      width={58}
      height={58}
      fill="currentColor"
    >
      <path fill="#fff" d="M8.5 21.212h58v58h-58z" />
      <path d="M49.652 22.212H25.376c-9.492 0-15.876 6.664-15.876 16.576v22.876c0 9.884 6.384 16.548 15.876 16.548h24.276c9.492 0 15.848-6.664 15.848-16.548V38.788c0-9.912-6.356-16.576-15.848-16.576Z" />
    </mask>
    <path
      d="M49.652 22.212H25.376c-9.492 0-15.876 6.664-15.876 16.576v22.876c0 9.884 6.384 16.548 15.876 16.548h24.276c9.492 0 15.848-6.664 15.848-16.548V38.788c0-9.912-6.356-16.576-15.848-16.576Z"
      fill="#72DC60"
      fillOpacity={0.9}
    />
    <path
      d="M49.652 23.212a1 1 0 1 0 0-2v2Zm0-2a1 1 0 1 0 0 2v-2Zm0 0H25.376v2h24.276v-2Zm-24.276 0c-4.989 0-9.229 1.757-12.22 4.88C10.17 29.21 8.5 33.614 8.5 38.787h2c0-4.74 1.523-8.622 4.1-11.313 2.575-2.688 6.273-4.263 10.776-4.263v-2ZM8.5 38.788v22.876h2V38.788h-2Zm0 22.876c0 5.16 1.67 9.558 4.657 12.673 2.99 3.118 7.23 4.875 12.219 4.875v-2c-4.503 0-8.202-1.575-10.776-4.26-2.577-2.688-4.1-6.564-4.1-11.288h-2Zm16.876 17.548h24.276v-2H25.376v2Zm24.276 0c4.989 0 9.222-1.757 12.206-4.876 2.98-3.116 4.642-7.514 4.642-12.672h-2c0 4.726-1.516 8.602-4.087 11.29-2.567 2.683-6.258 4.258-10.761 4.258v2ZM66.5 61.664V38.788h-2v22.876h2Zm0-22.876c0-5.172-1.661-9.577-4.642-12.696-2.983-3.123-7.217-4.88-12.206-4.88v2c4.503 0 8.194 1.575 10.76 4.262 2.571 2.69 4.088 6.573 4.088 11.314h2Z"
      fill="url(#success_img_svg__c)"
      mask="url(#success_img_svg__d)"
    />
    <g filter="url(#success_img_svg__e)">
      <mask id="success_img_svg__h" fill="#fff">
        <path d="M34.178 59.306a2.442 2.442 0 0 1-1.733-.717L25.8 51.945a2.447 2.447 0 0 1 0-3.464 2.447 2.447 0 0 1 3.464-.002l4.914 4.914 11.558-11.559A2.45 2.45 0 0 1 49.2 45.3L35.91 58.59a2.442 2.442 0 0 1-1.733.716Z" />
      </mask>
      <path
        d="M34.178 59.306a2.442 2.442 0 0 1-1.733-.717L25.8 51.945a2.447 2.447 0 0 1 0-3.464 2.447 2.447 0 0 1 3.464-.002l4.914 4.914 11.558-11.559A2.45 2.45 0 0 1 49.2 45.3L35.91 58.59a2.442 2.442 0 0 1-1.733.716Z"
        fill="url(#success_img_svg__f)"
      />
      <path
        d="m25.8 48.481.141.142-.14-.142Zm8.378 4.912-.142.141.142.141.141-.141-.141-.141ZM49.2 45.3l-.142-.142.142.142ZM35.91 58.589l.142.142-.142-.142Zm-1.733.517a2.242 2.242 0 0 1-1.592-.658l-.283.283a2.642 2.642 0 0 0 1.875.775v-.4Zm-1.592-.658-6.644-6.645-.283.283 6.644 6.645.283-.283Zm-6.644-6.645a2.247 2.247 0 0 1 0-3.18l-.283-.283a2.647 2.647 0 0 0 0 3.746l.283-.282Zm0-3.18a2.247 2.247 0 0 1 3.18-.003l.283-.283a2.647 2.647 0 0 0-3.746.003l.283.283Zm3.18-.003 4.914 4.914.283-.283-4.914-4.914-.283.283Zm5.197 4.914 11.559-11.558-.283-.283L34.036 53.25l.283.283Zm11.559-11.558c.88-.88 2.3-.88 3.18 0l.283-.283a2.647 2.647 0 0 0-3.746 0l.283.283Zm3.18 0c.88.88.88 2.304 0 3.183l.283.283a2.65 2.65 0 0 0 0-3.75l-.283.284Zm0 3.183L35.77 58.448l.282.283 13.29-13.289-.284-.283ZM35.77 58.448c-.44.44-1.016.658-1.592.658v.4c.678 0 1.357-.257 1.875-.775l-.283-.283Z"
        fill="url(#success_img_svg__g)"
        fillOpacity={0.5}
        mask="url(#success_img_svg__h)"
      />
    </g>
    <defs>
      <linearGradient
        id="success_img_svg__a"
        x1={87.438}
        y1={20.658}
        x2={42.089}
        y2={50.153}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#9BF763" />
        <stop offset={1} stopColor="#26AB5B" />
      </linearGradient>
      <linearGradient
        id="success_img_svg__c"
        x1={18.414}
        y1={28.736}
        x2={54.136}
        y2={72.979}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" stopOpacity={0.25} />
        <stop offset={1} stopColor="#fff" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="success_img_svg__f"
        x1={48.157}
        y1={44.401}
        x2={20.518}
        y2={45.631}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#fff" stopOpacity={0.2} />
      </linearGradient>
      <linearGradient
        id="success_img_svg__g"
        x1={27.757}
        y1={47.218}
        x2={48.846}
        y2={47.377}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#fff" stopOpacity={0} />
      </linearGradient>
      <filter
        id="success_img_svg__b"
        x={26.836}
        y={11.291}
        width={71.203}
        height={71.43}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx={5} dy={8} />
        <feGaussianBlur stdDeviation={8.5} />
        <feColorMatrix values="0 0 0 0 0.223529 0 0 0 0 0.72549 0 0 0 0 0.227451 0 0 0 0.25 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_6166_119302" />
        <feBlend in="SourceGraphic" in2="effect1_dropShadow_6166_119302" result="shape" />
      </filter>
      <filter
        id="success_img_svg__e"
        x={20.082}
        y={36.116}
        width={44.836}
        height={38.19}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx={5} dy={5} />
        <feGaussianBlur stdDeviation={5} />
        <feColorMatrix values="0 0 0 0 0.454902 0 0 0 0 0.870588 0 0 0 0 0.376471 0 0 0 0.5 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_6166_119302" />
        <feBlend in="SourceGraphic" in2="effect1_dropShadow_6166_119302" result="shape" />
      </filter>
    </defs>
  </svg>
);

export default SvgSuccessImg;
