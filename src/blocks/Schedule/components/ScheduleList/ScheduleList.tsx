import { FC, useMemo } from "react";
import { SCHEDULE_MAP } from "../../consts";
import ScheduleItem from "../ScheduleItem";
import styles from "./ScheduleList.module.scss";

type Props = { showAll: boolean; activeDay: string };

const ScheduleList: FC<Props> = ({ showAll, activeDay }) => {
  const list = useMemo(
    () =>
      showAll
        ? SCHEDULE_MAP[activeDay]
        : SCHEDULE_MAP[activeDay]?.filter((item, i) => i <= 2),
    [showAll, activeDay]
  );

  if (!list || list?.length === 0) {
    return <div className={styles.cellPlaceholder}>No events today</div>;
  }

  return (
    <>
      {list?.map((item, i) => (
        <ScheduleItem item={item} key={item.time + i} className={styles.cell} />
      ))}
    </>
  );
};

export default ScheduleList;
