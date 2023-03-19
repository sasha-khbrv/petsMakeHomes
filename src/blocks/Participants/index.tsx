import { FC } from "react";
import { SECTION_ID } from "../../helpers/types";
import PartisipantsItem from "./components/PartisipantsItem";
import { PARTICIPANTS_MAP } from "./consts";
import styles from "./Participants.module.scss";

const Participants: FC = () => {
  return (
    <div className={styles.container} id={SECTION_ID.PARTISIPANTS}>
      <h2 className={styles.title}>Who awaits you</h2>
      <p className={styles.description}>
        All animals are ready to go home: all the necessary vaccinations, chips
        and passports are made, and all the animals are neutered and sterilized.
      </p>
      {PARTICIPANTS_MAP.map((item, i) => (
        <PartisipantsItem item={item} i={i} key={item.title + i} />
      ))}
    </div>
  );
};

export default Participants;
