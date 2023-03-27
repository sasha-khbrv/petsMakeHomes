import { FC } from "react";
import { SECTION_ID } from "../../helpers/types";
import PartisipantsItem from "./components/PartisipantsItem";
import { PARTICIPANTS_MAP } from "./consts";
import styles from "./Participants.module.scss";

const Participants: FC = () => {
  return (
    <section className={styles.container} id={SECTION_ID.PARTISIPANTS}>
      <h2 className={styles.title}>Who awaits you</h2>
      <p className={styles.description}>
        All animals are ready to go home: all the necessary vaccinations, chips
        and passports are made, and all the animals are neutered and sterilized.
      </p>
      <ul className={styles.listContainer}>
        {PARTICIPANTS_MAP.map((item, i) => (
          <li className={styles[`participant${i}`]}>
            <PartisipantsItem item={item} i={i} key={item.title + i} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Participants;
