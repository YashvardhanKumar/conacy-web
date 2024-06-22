"use client";
import React, { useState } from "react";
import person from "@/public/person.png";
import Image from "next/image";
import Link from "next/link";

type PostProps = {};

const PostCardImage = ({}) => {
  const [seeMore, setSeeMore] = useState(false);
  return (
    <div className="w-[390px]">
      <div className="p-1 font-bold h-12 flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8">
            <Image
              src={person}
              alt=""
              height={36}
              className="w-full h-8 rounded-md object-cover"
            />
          </div>
          <div>
            <div>Dwaine Jhonson</div>
            <div className=" text-xs text-gray-400">{"@" + "the_rock"}</div>
          </div>
        </div>
        <div className="flex gap-2">
          <Link href={"/send/post?id=9999"}>
            <svg
              height={24}
              width={24}
              viewBox="0 0 24 24"
              fill="none"
              className="dark:*:fill-white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.33 3.66996C20.1408 3.48213 19.9035 3.35008 19.6442 3.28833C19.3849 3.22659 19.1135 3.23753 18.86 3.31996L4.23 8.19996C3.95867 8.28593 3.71891 8.45039 3.54099 8.67255C3.36307 8.89471 3.25498 9.16462 3.23037 9.44818C3.20576 9.73174 3.26573 10.0162 3.40271 10.2657C3.5397 10.5152 3.74754 10.7185 4 10.85L10.07 13.85L13.07 19.94C13.1906 20.1783 13.3751 20.3785 13.6029 20.518C13.8307 20.6575 14.0929 20.7309 14.36 20.73H14.46C14.7461 20.7089 15.0192 20.6023 15.2439 20.4239C15.4686 20.2456 15.6345 20.0038 15.72 19.73L20.67 5.13996C20.7584 4.88789 20.7734 4.6159 20.7132 4.35565C20.653 4.09541 20.5201 3.85762 20.33 3.66996ZM4.85 9.57996L17.62 5.31996L10.53 12.41L4.85 9.57996ZM14.43 19.15L11.59 13.47L18.68 6.37996L14.43 19.15Z"
                fill="black"
              />
            </svg>
          </Link>
          <Link href={"/save?pid=9999"}>
            <svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              className="dark:*:fill-white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.73709 3.88534C4.09637 4.57535 3.75 5.61497 3.75 7V17C3.75 18.385 4.09637 19.4246 4.73709 20.1147C5.36848 20.7946 6.39295 21.25 8 21.25H16C17.607 21.25 18.6315 20.7946 19.2629 20.1147C19.9036 19.4246 20.25 18.385 20.25 17V7C20.25 5.61497 19.9036 4.57535 19.2629 3.88534C18.6315 3.20538 17.607 2.75 16 2.75H8C6.39295 2.75 5.36848 3.20538 4.73709 3.88534ZM3.6379 2.86466C4.63152 1.79462 6.10705 1.25 8 1.25H16C17.8929 1.25 19.3685 1.79462 20.3621 2.86466C21.3464 3.92465 21.75 5.38503 21.75 7V17C21.75 18.615 21.3464 20.0754 20.3621 21.1353C19.3685 22.2054 17.8929 22.75 16 22.75H8C6.10705 22.75 4.63152 22.2054 3.6379 21.1353C2.65363 20.0754 2.25 18.615 2.25 17V7C2.25 5.38503 2.65363 3.92465 3.6379 2.86466Z"
                fill="black"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.75 2C7.75 1.58579 8.08579 1.25 8.5 1.25H15.5C15.9142 1.25 16.25 1.58579 16.25 2V9.85999C16.25 10.9701 14.9439 11.4994 14.1564 10.7857C14.1547 10.7843 14.1531 10.7828 14.1515 10.7813L12 8.79675L9.84854 10.7813C9.84692 10.7828 9.8453 10.7843 9.84367 10.7857C9.0562 11.4994 7.75 10.9702 7.75 9.85999V2ZM9.25 2.75V9.2927L11.1486 7.54137C11.6266 7.09291 12.3734 7.09292 12.8514 7.54139L14.75 9.29268V2.75H9.25Z"
                fill="black"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.5 14C12.5 13.5858 12.8358 13.25 13.25 13.25H17.5C17.9142 13.25 18.25 13.5858 18.25 14C18.25 14.4142 17.9142 14.75 17.5 14.75H13.25C12.8358 14.75 12.5 14.4142 12.5 14Z"
                fill="black"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.25 18C8.25 17.5858 8.58579 17.25 9 17.25H17.5C17.9142 17.25 18.25 17.5858 18.25 18C18.25 18.4142 17.9142 18.75 17.5 18.75H9C8.58579 18.75 8.25 18.4142 8.25 18Z"
                fill="black"
              />
            </svg>
          </Link>
        </div>
      </div>
      <Image src={person} alt="" className="w-[390px] h-[520px] object-cover" />
      <div className="w-full">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 text-sm">
            <form className="flex items-center">
              <button className="p-1">
                <svg
                  width="28"
                  height="28"
                  className="dark:*:fill-white"
                  viewBox="0 0 24 24"
                  fill="black"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.5 7C7.11024 7 6 8.11336 6 9.46667C6 10.9908 6.88166 12.6171 8.24626 14.2099C9.39162 15.5468 10.7839 16.7532 12 17.7264C13.2161 16.7532 14.6084 15.5468 15.7537 14.2099C17.1183 12.6171 18 10.9908 18 9.46667C18 8.11336 16.8898 7 15.5 7C14.1102 7 13 8.11336 13 9.46667C13 10.019 12.5523 10.4667 12 10.4667C11.4477 10.4667 11 10.019 11 9.46667C11 8.11336 9.88976 7 8.5 7ZM12 6.6587C11.1735 5.64559 9.91012 5 8.5 5C6.02376 5 4 6.99079 4 9.46667C4 11.7183 5.26747 13.807 6.72743 15.5111C8.20812 17.2395 10.0243 18.7293 11.3857 19.7891C11.747 20.0703 12.253 20.0703 12.6143 19.7891C13.9757 18.7293 15.7919 17.2395 17.2726 15.5111C18.7325 13.807 20 11.7183 20 9.46667C20 6.99079 17.9762 5 15.5 5C14.0899 5 12.8265 5.64559 12 6.6587Z"
                  />
                </svg>
              </button>
              <div>120K</div>
            </form>
            <form className="flex items-center">
              <button className="p-1">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="black"
                  className="dark:*:fill-white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10 4.82505C7.14198 4.82505 4.82505 7.14198 4.82505 10V19.175H14C16.8581 19.175 19.175 16.8581 19.175 14V10C19.175 7.14198 16.8581 4.82505 14 4.82505H10ZM3.17505 10C3.17505 6.23071 6.23071 3.17505 10 3.17505H14C17.7694 3.17505 20.825 6.23071 20.825 10V14C20.825 17.7694 17.7694 20.825 14 20.825H3.17505V10Z"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.17505 14C8.17505 13.5444 8.54441 13.175 9.00005 13.175H12C12.4557 13.175 12.825 13.5444 12.825 14C12.825 14.4557 12.4557 14.825 12 14.825H9.00005C8.54441 14.825 8.17505 14.4557 8.17505 14Z"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.17505 10C8.17505 9.54441 8.54441 9.17505 9.00005 9.17505H15C15.4557 9.17505 15.825 9.54441 15.825 10C15.825 10.4557 15.4557 10.825 15 10.825H9.00005C8.54441 10.825 8.17505 10.4557 8.17505 10Z"
                  />
                </svg>
              </button>
              <div>7K</div>
            </form>
          </div>
          <div className="px-1 py-1 border-[1px] border-[#EC61C5] bg-[#EC61C5] bg-opacity-35 m-2 rounded-lg text-xs">
            Best Friend
          </div>
        </div>
        <button onClick={() => setSeeMore(!seeMore)} className="my-2">
          <div
            className={`text-start ${
              seeMore ? "" : "line-clamp-2"
            } font-light text-sm dark:text-gray-400`}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
            distinctio, eius aliquid ex minima quos, dolorum nemo, voluptatem
            nobis itaque est dolorem totam ea culpa. Maxime nulla iure qui
            rerum!
          </div>
        </button>
        <div className="p-4 rounded-md dark:bg-blue-950 bg-blue-50">
          <div className="inline-flex items-center">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="black"
              className="dark:*:fill-white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10 4.82505C7.14198 4.82505 4.82505 7.14198 4.82505 10V19.175H14C16.8581 19.175 19.175 16.8581 19.175 14V10C19.175 7.14198 16.8581 4.82505 14 4.82505H10ZM3.17505 10C3.17505 6.23071 6.23071 3.17505 10 3.17505H14C17.7694 3.17505 20.825 6.23071 20.825 10V14C20.825 17.7694 17.7694 20.825 14 20.825H3.17505V10Z"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.17505 14C8.17505 13.5444 8.54441 13.175 9.00005 13.175H12C12.4557 13.175 12.825 13.5444 12.825 14C12.825 14.4557 12.4557 14.825 12 14.825H9.00005C8.54441 14.825 8.17505 14.4557 8.17505 14Z"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.17505 10C8.17505 9.54441 8.54441 9.17505 9.00005 9.17505H15C15.4557 9.17505 15.825 9.54441 15.825 10C15.825 10.4557 15.4557 10.825 15 10.825H9.00005C8.54441 10.825 8.17505 10.4557 8.17505 10Z"
              />
            </svg>
          <span>Comments</span>
          </div>

          <div className="text-start line-clamp-1 text-sm dark:text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            adipisci eveniet dolore reiciendis neque officiis nisi amet animi
            voluptates minus minima, tenetur et, quo itaque similique odio
            ducimus. Inventore, ex.
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCardImage;
