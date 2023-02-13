import { FC } from "react";
import Card from "../../components/Card/Card";
import styles from "./Program.module.scss";

const Program: FC = () => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.heading}>What awaits you</h2>
      <div className={styles.cardsWrapper}>
        {PROGRAM_MAP.map((item) => (
          <Card {...item} />
        ))}
      </div>
    </div>
  );
};

export default Program;

const PROGRAM_MAP = [
  {
    id: "pets",
    title: "Dogs and cats looking for a family",
    alt: "Image of yellow cat with black years and closed eyes on a pink and beige blob background",
  },
  {
    id: "lectures",
    title: "Lectures from vets and zoopsychologists",
    alt: "Image of humans heads in a profile on a pink and beige blob background",
  },
  {
    id: "consultation",
    title: "Consultations of vets and zoopsychologists",
    alt: "Image of three smiles imojies on a pink and beige blob background",
  },
  {
    id: "perfomances",
    title: "Auction and gifts from our partners",
    alt: "Image of a rabit in a magician's hat on a pink and beige blob background",
  },
  {
    id: "charity",
    title: "Charity area next to each shelter",
    alt: "Image of gift box on a pink and beige blob background",
  },
];
