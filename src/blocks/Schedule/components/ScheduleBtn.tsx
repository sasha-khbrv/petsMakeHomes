import React, { FC, useState } from "react";
import BlankButton from "../../../components/buttons/BlankButton";
import ArrowIcon from "../../../components/icons/ArrowIcon";
import { classNames } from "../../../helpers/classNames";
import { GREEN, GREEN_DARKER } from "../../../helpers/consts";
import styles from "./ScheduleBtn.module.scss";

type Props = {
  onToggle: () => void;
  className: string;
  showAll: boolean;
};

const ScheduleBtn: FC<Props> = ({ onToggle, showAll, className }) => {
  const [isHover, setIsHover] = useState<boolean>(false);
  return (
    <BlankButton
      onClick={onToggle}
      className={classNames(styles.wrapper, className)}
      onHover={setIsHover}
    >
      <span>Full schedule</span>
      <ArrowIcon
        color={isHover ? GREEN_DARKER : GREEN}
        className={classNames(styles.arrow, showAll && styles.collapsed)}
      />
    </BlankButton>
  );
};

export default ScheduleBtn;
