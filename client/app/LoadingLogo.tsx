import React from "react";
import logo from "@/public/conacylogo.svg";
import Image from "next/image";
const LoadingLogo = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center ">
      <div>
        <Image
          height={100}
          width={100}
          className="animate-[bounce_700ms_ease-in-out_infinite]"
          src={logo}
          alt="logo"
        />
      </div>
    </div>
  );
};

export default LoadingLogo;
