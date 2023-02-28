import { FC, useState } from "react";
import { classNames } from "../../helpers/classNames";
import { FONT_PRIMARY, GREEN } from "../../helpers/consts";
import { IconProps } from "../icons/types";
import BlankButton from "./BlankButton";
import styles from "./TextButton.module.scss";

type Props = {
  onClick: () => void;
  title: string;
  className?: string;
  iconClassName?: string;
  Icon?: FC<IconProps>;
};

const TextButton: FC<Props> = ({
  onClick,
  title,
  className,
  Icon,
  iconClassName,
}) => {
  const [isHover, setIsHover] = useState<boolean>(false);
  return (
    <BlankButton
      onClick={onClick}
      className={classNames(styles.wrapper, className)}
      onHover={setIsHover}
    >
      <span className={styles.link}>{title}</span>
      {Icon && (
        <span className={classNames(styles.icon, iconClassName)}>
          <Icon color={isHover ? GREEN : FONT_PRIMARY} />
        </span>
      )}
    </BlankButton>
  );
};

export default TextButton;
