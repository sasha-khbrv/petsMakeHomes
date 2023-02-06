import { FC } from "react";
import styles from "./Participants.module.scss";

const Participants: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.dogImg}></div>
      <div className={styles.catImg}></div>
      <h2 className={styles.title}>Who awaits you</h2>
      <p className={styles.description}>
        All animals are ready to go home: all the necessary vaccinations, chips
        and passports are made, and all the animals are neutered and sterilized.
      </p>
      {PARTICIPANTS_MAP.map((item, i) => (
        <PartisipantsItem item={item} i={i} />
      ))}
    </div>
  );
};

export default Participants;

const PartisipantsItem: FC<{ item: ParticipantBlock; i: number }> = ({
  item,
  i,
}) => {
  return (
    <div className={styles[`participant${i}`]}>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
    </div>
  );
};

type ParticipantBlock = {
  title: string;
  description: string;
};

const PARTICIPANTS_MAP: Array<ParticipantBlock> = [
  {
    title: "Faithful heart",
    description:
      "Shelter with large, very large dogs. Cubs are waiting for you.",
  },
  {
    title: "Dachshund team",
    description: "Private maintenance of fees. Hot dogs in every house!",
  },
  {
    title: "Special friend",
    description: "A small shelter with special and happy dogs and cats.",
  },
  {
    title: "Rzhevka",
    description:
      "One of the most orphanages in St. Petersburg. They have the most loyal friends!",
  },
  {
    title: "Koto house",
    description:
      "Residents of the cat cafe. Kittens, adults and older cats who love attention and affection.",
  },
  {
    title: "Cat's yard",
    description:
      "A small orphanage with cats. Come here for purring friends here.",
  },
];
