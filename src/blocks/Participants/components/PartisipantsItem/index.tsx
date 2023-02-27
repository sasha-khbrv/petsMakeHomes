import { FC } from "react";
import styles from "./PartisipantsItem.module.scss";

export type ParticipantBlock = {
  title: string;
  description: string;
};

type Props = { item: ParticipantBlock; i: number };

const PartisipantsItem: FC<Props> = ({ item, i }) => {
  return (
    <div className={styles[`participant${i}`]}>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
    </div>
  );
};

export default PartisipantsItem;
