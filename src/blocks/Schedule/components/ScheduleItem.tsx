import React, { FC } from "react";
import styles from "./ScheduleItem.module.scss";

export type ScheduleItem = {
  time: string;
  desctription: string;
  icon: string;
  isActive: boolean;
  parent: string;
};

const ScheduleItem: FC<{ item: ScheduleItem }> = ({ item }) => {
  return (
    <div>
      <div>{item.time}</div>
      <div>{item.desctription}</div>
      <img src={`src/assets/program/${item.icon}.svg`} />
    </div>
  );
};

export default ScheduleItem;