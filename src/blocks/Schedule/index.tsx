import { FC } from "react";
import ArrowIcon from "../../components/icons/ArrowIcon";

const Schedule: FC = () => {
  return (
    <div>
      <h2>Schedule </h2>
      <div>
        <button>September 23</button>
        <button>September 24</button>
      </div>
      <ScheduleBlock />
    </div>
  );
};

export default Schedule;

const ScheduleBlock: FC = () => {
  return (
    <div>
      {SCHEDULE_MAP.map((item) => (
        <ScheduleItem item={item} />
      ))}
      <div>
        Full schedule <ArrowIcon />
      </div>
    </div>
  );
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
type ScheduleItem = {
  time: string;
  desctription: string;
  icon: string;
  isActive: boolean;
};
const SCHEDULE_MAP: Array<ScheduleItem> = [
  {
    time: "10.00",
    desctription: "Opening. Rules and wishes",
    icon: "pets",
    isActive: false,
  },
  {
    time: "10.30 - 19.00",
    desctription: "Exhibition of homeless animals",
    icon: "pets",
    isActive: false,
  },
  {
    time: "10.30 - 19.00",
    desctription: "Expert consultation",
    icon: "consultation",
    isActive: false,
  },
  {
    time: "12:00 — 13:00",
    desctription: "Lecture 'A dog from a shelter. How to prepare'",
    icon: "lectures",
    isActive: false,
  },
  {
    time: "13:30 — 15:30",
    desctription: "Auction in favor of shelters",
    icon: "pets",
    isActive: false,
  },
];
