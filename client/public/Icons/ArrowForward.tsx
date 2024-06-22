import React, { FC } from "react";
import { IconProps } from "./IconProps";

const ArrowForward: FC<IconProps> = ({className}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
      className={`h-6 w-6 fill-white dark:fill-black ${className}`}
      viewBox="0 -960 960 960"
    >
      <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
    </svg>
  );
};

export default ArrowForward;
