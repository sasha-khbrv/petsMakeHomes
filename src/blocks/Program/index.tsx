import { FC } from "react";
import Card from "../../components/Card";
import { SECTION_ID } from "../../helpers/types";
import { PROGRAM_MAP } from "./consts";
import styles from "./Program.module.scss";

const Program: FC = () => {
  return (
    <section className={styles.wrapper} id={SECTION_ID.PROGRAMME}>
      <h2 className={styles.heading}>What awaits you</h2>
      <ul className={styles.cardsWrapper}>
        {PROGRAM_MAP.map((item) => (
          <li>
            <Card
              key={item.id}
              {...item}
              imgSpecification={{ folder: "program", extension: "svg" }}
              imgClassName={styles.icon}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Program;
