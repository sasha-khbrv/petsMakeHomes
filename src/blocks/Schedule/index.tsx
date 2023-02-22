import { FC, useState } from "react";
import Tabs from "../../components/Tabs/Tabs";
import ScheduleBlock from "./components/ScheduleBlock";
import { SCHEDULE_DAY_MAP } from "./consts";
import styles from "./Schedule.module.scss";

const Schedule: FC = () => {
  const [activeDay, setActiveDay] = useState(SCHEDULE_DAY_MAP[0]);
  return (
    <div className={styles.wrapper}>
      <h2>Schedule</h2>
      <Tabs
        className={styles.tabs}
        list={SCHEDULE_DAY_MAP}
        onClick={setActiveDay}
        activeTab={activeDay}
      />
      <ScheduleBlock activeDay={activeDay.id} />
    </div>
  );
};

export default Schedule;




