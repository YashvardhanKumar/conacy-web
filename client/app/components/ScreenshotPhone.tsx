import React from 'react'
import feed from "@/public/feed.png";
import Image from 'next/image';

const ScreenshotPhone = (props: any) => {
  return (
    <div className="mx-8 my-4 h-[480px] w-[240px] relative">
        <div className="display absolute">
          <Image
            src={feed}
            alt=""
            className="bg-white rounded-3xl p-2 h-[480px]"
          />
        </div>
        <div className="absolute border-8 border-black h-[480px] w-[240px] rounded-3xl bg-clip-border"></div>
      </div>
  )
}

export default ScreenshotPhone