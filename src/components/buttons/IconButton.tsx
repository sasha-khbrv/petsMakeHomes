import { FC, useState } from "react";
import { classNames } from "../../helpers/classNames";
import { FONT_PRIMARY, FONT_SECONDARY } from "../../helpers/consts";
import { IconProps } from "../icons/types";
import BlankButton from "./BlankButton";
import styles from "./IconButton.module.scss";

type Props = {
  onClick: () => void;
  className?: string;
  Icon: FC<IconProps>;
};

const IconButton: FC<Props> = ({ onClick, className, Icon }) => {
  const [isHover, setIsHover] = useState<boolean>(false);
  return (
    <BlankButton
      onClick={onClick}
      className={classNames(styles.wrapper, className)}
      onHover={setIsHover}
    >
      <Icon color={isHover ? FONT_PRIMARY : FONT_SECONDARY} />
    </BlankButton>
  );
};

export default IconButton;
