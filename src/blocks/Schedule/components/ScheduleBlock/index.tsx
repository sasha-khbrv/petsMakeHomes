import React, { FC, useMemo, useState } from "react";
import styles from "./ScheduleBlock.module.scss";
import ScheduleBtn from "../ScheduleBtn";
import ScheduleList from "../ScheduleList/ScheduleList";

type Props = { activeDay: string };

const ScheduleBlock: FC<Props> = ({ activeDay }) => {
  const [showAll, setShowAll] = useState<boolean>(false);

  return (
    <div className={styles.wrapper}>
      <ScheduleList showAll={showAll} activeDay={activeDay} />
      <ScheduleBtn
        className={styles.toggle}
        onToggle={() => setShowAll((prev) => !prev)}
        showAll={showAll}
      />
    </div>
  );
};

export default ScheduleBlock;
