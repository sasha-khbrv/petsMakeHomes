import { FC } from "react";
import { FONT_PRIMARY } from "../../helpers/consts";
import { IconProps } from "./types";

const ShareIcon: FC<IconProps> = ({ color = FONT_PRIMARY, className }) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 12C26.2091 12 28 10.2091 28 8C28 5.79086 26.2091 4 24 4C21.7909 4 20 5.79086 20 8C20 8.28742 20.0303 8.56777 20.0879 8.83801L11.0169 13.3735C10.2836 12.5319 9.20393 12 8 12C5.79086 12 4 13.7909 4 16C4 18.2091 5.79086 20 8 20C9.20393 20 10.2836 19.4681 11.0169 18.6265L20.0879 23.162C20.0303 23.4322 20 23.7126 20 24C20 26.2091 21.7909 28 24 28C26.2091 28 28 26.2091 28 24C28 21.7909 26.2091 20 24 20C22.7961 20 21.7164 20.5319 20.9831 21.3735L11.9121 16.838C11.9697 16.5678 12 16.2874 12 16C12 15.7126 11.9697 15.4322 11.9121 15.162L20.9831 10.6265C21.7164 11.4681 22.7961 12 24 12Z"
        fill={color}
      />
    </svg>
  );
};
export default ShareIcon;
