import { ScheduleItem } from "./components/ScheduleItem";

export const SCHEDULE_DAY_MAP = [
  { id: "sep23", title: "September 23" },
  { id: "sep24", title: "September 24" },
];

export const SCHEDULE_MAP: { [key: string]: Array<ScheduleItem> } = {
  [SCHEDULE_DAY_MAP[0].id]: [
    {
      time: "10.00",
      desctription: "Opening. Rules and wishes",
      icon: "pets",
      isActive: false,
      parent: SCHEDULE_DAY_MAP[0].id,
    },
    {
      time: "10.30 - 19.00",
      desctription: "Exhibition of homeless animals",
      icon: "pets",
      isActive: false,
      parent: SCHEDULE_DAY_MAP[0].id,
    },
    {
      time: "10.30 - 19.00",
      desctription: "Expert consultation",
      icon: "consultation",
      isActive: false,
      parent: SCHEDULE_DAY_MAP[0].id,
    },
    {
      time: "12:00 — 13:00",
      desctription: "Lecture 'A dog from a shelter. How to prepare'",
      icon: "lectures",
      isActive: false,
      parent: SCHEDULE_DAY_MAP[0].id,
    },
    {
      time: "13:30 — 15:30",
      desctription: "Auction in favor of shelters",
      icon: "pets",
      isActive: false,
      parent: SCHEDULE_DAY_MAP[0].id,
    },
  ],
};
