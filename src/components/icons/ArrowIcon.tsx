import { FC } from "react";
import { FONT_PRIMARY } from "../../helpers/consts";
import { IconProps } from "./types";

const ArrowIcon: FC<IconProps> = ({ color = FONT_PRIMARY, className }) => {
  return (
    <svg
      width="10"
      height="11"
      viewBox="0 0 10 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M9.78 4.6V7.42L5.06 10.52L0.34 7.42V4.6L5.06 7.38L9.78 4.6ZM6.52 0.499999V7.86H3.6V0.499999H6.52Z"
        fill={color}
      />
    </svg>
  );
};
export default ArrowIcon;
