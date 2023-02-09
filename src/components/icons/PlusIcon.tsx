import { FC } from "react";
import { FONT_PRIMARY } from "../../helpers/consts";
import { IconProps } from "./types";

const PlusIcon: FC<IconProps> = ({ color = FONT_PRIMARY }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="1" y="6" width="14" height="4" fill={color} />
      <rect x="6" y="1" width="4" height="14" fill={color} />
    </svg>
  );
};
export default PlusIcon;
