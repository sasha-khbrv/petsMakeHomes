import { FC } from "react";
import { FONT_PRIMARY } from "../../helpers/consts";
import { IconProps } from "./types";

const ShareIcon: FC<IconProps> = ({ color = FONT_PRIMARY }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32">
      <path
        fill="#000"
        d="M24 4c-2.21 0-4 1.79-4 4 0 .277.04.55.094.813L11 13.375A3.965 3.965 0 0 0 8 12c-2.21 0-4 1.79-4 4s1.79 4 4 4a3.965 3.965 0 0 0 3-1.375l9.094 4.563A3.983 3.983 0 0 0 20 24c0 2.21 1.79 4 4 4s4-1.79 4-4-1.79-4-4-4a3.965 3.965 0 0 0-3 1.375l-9.094-4.563c.055-.261.094-.535.094-.812s-.04-.55-.094-.813L21 10.625A3.965 3.965 0 0 0 24 12c2.21 0 4-1.79 4-4s-1.79-4-4-4Z"
      />
      <mask
        id="a"
        width="24"
        height="24"
        x="4"
        y="4"
        maskUnits="userSpaceOnUse"
      >
        <path
          fill="#fff"
          d="M24 4c-2.21 0-4 1.79-4 4 0 .277.04.55.094.813L11 13.375A3.965 3.965 0 0 0 8 12c-2.21 0-4 1.79-4 4s1.79 4 4 4a3.965 3.965 0 0 0 3-1.375l9.094 4.563A3.983 3.983 0 0 0 20 24c0 2.21 1.79 4 4 4s4-1.79 4-4-1.79-4-4-4a3.965 3.965 0 0 0-3 1.375l-9.094-4.563c.055-.261.094-.535.094-.812s-.04-.55-.094-.813L21 10.625A3.965 3.965 0 0 0 24 12c2.21 0 4-1.79 4-4s-1.79-4-4-4Z"
        />
      </mask>
      <g mask="url(#a)">
        <path fill={color} d="M1 0h32v32H1z" />
      </g>
    </svg>
  );
};
export default ShareIcon;
