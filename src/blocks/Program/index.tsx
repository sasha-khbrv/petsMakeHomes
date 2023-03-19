import { FC } from "react";
import Card from "../../components/Card";
import { SECTION_ID } from "../../helpers/types";
import { PROGRAM_MAP } from "./consts";
import styles from "./Program.module.scss";

const Program: FC = () => {
  return (
    <div className={styles.wrapper} id={SECTION_ID.PROGRAMME}>
      <h2 className={styles.heading}>What awaits you</h2>
      <div className={styles.cardsWrapper}>
        {PROGRAM_MAP.map((item) => (
          <Card
            key={item.id}
            {...item}
            imgSpecification={{ folder: "program", extension: "svg" }}
            imgClassName={styles.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default Program;
