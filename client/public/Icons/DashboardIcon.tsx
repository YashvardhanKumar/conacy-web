import React, { FC } from "react";
import { IconProps } from "./IconProps";

const DashboardIcon : FC<IconProps> = ({className}) => {
  return (
    <svg
      viewBox="0 0 24 24"
      className="dark:*:fill-white h-8 w-8"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.99998 4.64498C4.90583 4.64498 4.81553 4.68238 4.74896 4.74896C4.68238 4.81553 4.64498 4.90583 4.64498 4.99998V9.99998C4.64498 10.0941 4.68238 10.1844 4.74896 10.251C4.81553 10.3176 4.90583 10.355 4.99998 10.355H8.99998C9.09413 10.355 9.18443 10.3176 9.251 10.251C9.31758 10.1844 9.35498 10.0941 9.35498 9.99998V4.99998C9.35498 4.90583 9.31758 4.81553 9.251 4.74896C9.18443 4.68238 9.09413 4.64498 8.99998 4.64498H4.99998ZM3.83679 3.83679C4.14529 3.52829 4.5637 3.35498 4.99998 3.35498H8.99998C9.43626 3.35498 9.85467 3.52829 10.1632 3.83679C10.4717 4.14529 10.645 4.5637 10.645 4.99998V9.99998C10.645 10.4363 10.4717 10.8547 10.1632 11.1632C9.85467 11.4717 9.43626 11.645 8.99998 11.645H4.99998C4.5637 11.645 4.14529 11.4717 3.83679 11.1632C3.52829 10.8547 3.35498 10.4363 3.35498 9.99998V4.99998C3.35498 4.5637 3.52829 4.14529 3.83679 3.83679ZM15 4.64498C14.9058 4.64498 14.8155 4.68238 14.749 4.74896C14.6824 4.81553 14.645 4.90583 14.645 4.99998V6.99998C14.645 7.09413 14.6824 7.18443 14.749 7.251C14.8155 7.31758 14.9058 7.35498 15 7.35498H19C19.0941 7.35498 19.1844 7.31758 19.251 7.251C19.3176 7.18443 19.355 7.09413 19.355 6.99998V4.99998C19.355 4.90583 19.3176 4.81553 19.251 4.74896C19.1844 4.68238 19.0941 4.64498 19 4.64498H15ZM13.8368 3.83679C14.1453 3.52829 14.5637 3.35498 15 3.35498H19C19.4363 3.35498 19.8547 3.52829 20.1632 3.83679C20.4717 4.14529 20.645 4.5637 20.645 4.99998V6.99998C20.645 7.43626 20.4717 7.85467 20.1632 8.16317C19.8547 8.47167 19.4363 8.64498 19 8.64498H15C14.5637 8.64498 14.1453 8.47167 13.8368 8.16317C13.5283 7.85467 13.355 7.43626 13.355 6.99998V4.99998C13.355 4.5637 13.5283 4.14529 13.8368 3.83679ZM15 12.645C14.9058 12.645 14.8155 12.6824 14.749 12.749C14.6824 12.8155 14.645 12.9058 14.645 13V19C14.645 19.0941 14.6824 19.1844 14.749 19.251C14.8155 19.3176 14.9058 19.355 15 19.355H19C19.0941 19.355 19.1844 19.3176 19.251 19.251C19.3176 19.1844 19.355 19.0941 19.355 19V13C19.355 12.9058 19.3176 12.8155 19.251 12.749C19.1844 12.6824 19.0941 12.645 19 12.645H15ZM13.8368 11.8368C14.1453 11.5283 14.5637 11.355 15 11.355H19C19.4363 11.355 19.8547 11.5283 20.1632 11.8368C20.4717 12.1453 20.645 12.5637 20.645 13V19C20.645 19.4363 20.4717 19.8547 20.1632 20.1632C19.8547 20.4717 19.4363 20.645 19 20.645H15C14.5637 20.645 14.1453 20.4717 13.8368 20.1632C13.5283 19.8547 13.355 19.4363 13.355 19V13C13.355 12.5637 13.5283 12.1453 13.8368 11.8368ZM4.99998 15.645C4.90583 15.645 4.81553 15.6824 4.74896 15.749C4.68238 15.8155 4.64498 15.9058 4.64498 16V19C4.64498 19.0941 4.68238 19.1844 4.74896 19.251C4.81553 19.3176 4.90583 19.355 4.99998 19.355H8.99998C9.09413 19.355 9.18443 19.3176 9.251 19.251C9.31758 19.1844 9.35498 19.0941 9.35498 19V16C9.35498 15.9058 9.31758 15.8155 9.251 15.749C9.18443 15.6824 9.09413 15.645 8.99998 15.645H4.99998ZM3.83679 14.8368C4.14529 14.5283 4.5637 14.355 4.99998 14.355H8.99998C9.43626 14.355 9.85467 14.5283 10.1632 14.8368C10.4717 15.1453 10.645 15.5637 10.645 16V19C10.645 19.4363 10.4717 19.8547 10.1632 20.1632C9.85467 20.4717 9.43626 20.645 8.99998 20.645H4.99998C4.5637 20.645 4.14529 20.4717 3.83679 20.1632C3.52829 19.8547 3.35498 19.4363 3.35498 19V16C3.35498 15.5637 3.52829 15.1453 3.83679 14.8368Z"
        fill="black"
      />
    </svg>
  );
};

export default DashboardIcon;
