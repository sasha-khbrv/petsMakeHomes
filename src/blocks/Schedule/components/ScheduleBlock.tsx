import React, { FC, useMemo, useState } from "react";
import BlankButton from "../../../components/buttons/BlankButton";
import ArrowIcon from "../../../components/icons/ArrowIcon";
import { SCHEDULE_MAP } from "../consts";
import styles from "./ScheduleBlock.module.scss";
import ScheduleBtn from "./ScheduleBtn";
import ScheduleItem from "./ScheduleItem";

type Props = { activeDay: string };

const ScheduleBlock: FC<Props> = ({ activeDay }) => {
  const [showAll, setShowAll] = useState<boolean>(false);

  const list = useMemo(() => {
    const newList = showAll
      ? SCHEDULE_MAP[activeDay]
      : SCHEDULE_MAP[activeDay].filter((item, i) => i <= 2);

    return newList.map((item, i) => (
      <ScheduleItem item={item} key={item.time + i} className={styles.cell} />
    ));
  }, [activeDay, showAll]);

  return (
    <div className={styles.wrapper}>
      {list}
      <ScheduleBtn
        className={styles.toggle}
        onToggle={() => setShowAll((prev) => !prev)}
        showAll={showAll}
      />
    </div>
  );
};

export default ScheduleBlock;
