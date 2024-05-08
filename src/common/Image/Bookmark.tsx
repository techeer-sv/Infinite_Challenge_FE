import { IconProps } from "@/src/types/icon";
import React from "react";

const Bookmark = ({ width, height, ...rest }: IconProps) => {
  return (
    <svg
      width={`${width}px`}
      height={`${height}px`}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <g clip-path="url(#clip0_29_639)">
        <path
          d="M15.5835 2.75H6.41683C5.4085 2.75 4.59266 3.575 4.59266 4.58333L4.5835 19.25L11.0002 16.5L17.4168 19.25V4.58333C17.4168 3.575 16.5918 2.75 15.5835 2.75Z"
          fill="#007BE9"
        />
      </g>
      <defs>
        <clipPath id="clip0_29_639">
          <rect width="22" height="22" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Bookmark;
