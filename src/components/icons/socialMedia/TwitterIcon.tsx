import { FC } from "react";
import { FONT_PRIMARY } from "../../../helpers/consts";
import { IconProps } from "../types";

const TwitterIcon: FC<IconProps> = ({ color = FONT_PRIMARY }) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M27.6214 8.27164C26.7524 8.65745 25.8185 8.91707 24.8377 9.03606C25.8365 8.43389 26.6082 7.48558 26.9688 6.35337C26.0312 6.90865 24.9928 7.3125 23.8894 7.52885C23.006 6.58774 21.7476 6 20.3522 6C17.6767 6 15.506 8.17067 15.506 10.8462C15.506 11.2248 15.5493 11.5962 15.6322 11.9495C11.6046 11.7476 8.03486 9.8149 5.64423 6.88341C5.22596 7.60096 4.98798 8.43389 4.98798 9.32452C4.98798 11.0048 5.84255 12.4868 7.14423 13.3558C6.34736 13.3305 5.60096 13.1142 4.94832 12.75C4.94832 12.7716 4.94832 12.7897 4.94832 12.8113C4.94832 15.1587 6.61779 17.1166 8.83534 17.5637C8.42788 17.6755 8.0024 17.7332 7.55889 17.7332C7.24519 17.7332 6.94231 17.7043 6.64664 17.6466C7.26322 19.5685 9.05168 20.9748 11.1719 21.0108C9.51683 22.3125 7.42548 23.0841 5.15385 23.0841C4.76082 23.0841 4.37861 23.0625 4 23.0192C6.14183 24.393 8.69111 25.1935 11.4279 25.1935C20.3413 25.1935 25.2163 17.8089 25.2163 11.4087C25.2163 11.1959 25.2127 10.9868 25.2019 10.7776C26.1502 10.0998 26.9724 9.24519 27.6214 8.27164"
        fill="black"
      />
      <mask
        id="mask0_0_24"
        maskUnits="userSpaceOnUse"
        x="4"
        y="6"
        width="24"
        height="20"
      >
        <path
          d="M27.6214 8.27164C26.7524 8.65745 25.8185 8.91707 24.8377 9.03606C25.8365 8.43389 26.6082 7.48558 26.9688 6.35337C26.0312 6.90865 24.9928 7.3125 23.8894 7.52885C23.006 6.58774 21.7476 6 20.3522 6C17.6767 6 15.506 8.17067 15.506 10.8462C15.506 11.2248 15.5493 11.5962 15.6322 11.9495C11.6046 11.7476 8.03486 9.8149 5.64423 6.88341C5.22596 7.60096 4.98798 8.43389 4.98798 9.32452C4.98798 11.0048 5.84255 12.4868 7.14423 13.3558C6.34736 13.3305 5.60096 13.1142 4.94832 12.75C4.94832 12.7716 4.94832 12.7897 4.94832 12.8113C4.94832 15.1587 6.61779 17.1166 8.83534 17.5637C8.42788 17.6755 8.0024 17.7332 7.55889 17.7332C7.24519 17.7332 6.94231 17.7043 6.64664 17.6466C7.26322 19.5685 9.05168 20.9748 11.1719 21.0108C9.51683 22.3125 7.42548 23.0841 5.15385 23.0841C4.76082 23.0841 4.37861 23.0625 4 23.0192C6.14183 24.393 8.69111 25.1935 11.4279 25.1935C20.3413 25.1935 25.2163 17.8089 25.2163 11.4087C25.2163 11.1959 25.2127 10.9868 25.2019 10.7776C26.1502 10.0998 26.9724 9.24519 27.6214 8.27164"
          fill="white"
        />
      </mask>
      <g mask="url(#mask0_0_24)">
        <rect x="-4" width="32" height="32" fill={color} />
      </g>
    </svg>
  );
};
export default TwitterIcon;
