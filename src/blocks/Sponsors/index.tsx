import { FC } from "react";
import Card from "../../components/Card";
import { NAV_MAP } from "../../helpers/consts";
import { SECTION_ID } from "../../helpers/types";
import { SPONSORS_MAP } from "./consts";
import styles from "./Sponsors.module.scss";

const Sponsors: FC = () => {
  return (
    <div className={styles.wrapper} id={SECTION_ID.SPONSORS}>
      <h2 className={styles.heading}>Our Sponsors</h2>
      <div className={styles.cardsWrapper}>
        {SPONSORS_MAP.map((item, i) => (
          <Card
            key={item.id}
            {...item}
            imgSpecification={{ folder: "sponsors", extension: "png" }}
          />
        ))}
      </div>
    </div>
  );
};

export default Sponsors;
