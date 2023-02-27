import React, { FC } from "react";
import { classNames } from "../../../helpers/classNames";
import styles from "./ScheduleItem.module.scss";

export type ScheduleItem = {
  time: string;
  desctription: string;
  icon: string;
  isActive: boolean;
  parent: string;
};

type Props = { className?: string; item: ScheduleItem };

const ScheduleItem: FC<Props> = ({ item, className }) => {
  return (
    <div className={classNames(styles.wrapper, className)}>
      <div className={styles.time}>{item.time}</div>
      <div className={styles.descr}>{item.desctription}</div>
      <img
        src={`src/assets/program/${item.icon}.svg`}
        className={styles.icon}
      />
    </div>
  );
};

export default ScheduleItem;
