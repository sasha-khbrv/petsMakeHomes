import { FC, useState } from "react";
import Tabs from "../../components/Tabs";
import { SECTION_ID } from "../../helpers/types";
import ScheduleBlock from "./components/ScheduleBlock";
import { SCHEDULE_DAY_MAP } from "./consts";
import styles from "./Schedule.module.scss";

const Schedule: FC = () => {
  const [activeDay, setActiveDay] = useState(SCHEDULE_DAY_MAP[0]);
  return (
    <section className={styles.wrapper} id={SECTION_ID.SCHEDULE}>
      <h2>Schedule</h2>
      <Tabs
        className={styles.tabs}
        list={SCHEDULE_DAY_MAP}
        onClick={setActiveDay}
        activeTab={activeDay}
      />
      <ScheduleBlock activeDay={activeDay.id} />
    </section>
  );
};

export default Schedule;
