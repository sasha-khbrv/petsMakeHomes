import { FC } from "react";
import styles from "./Card.module.scss";

export type Props = {
  id: string;
  title?: string;
  alt: string;
};

const Card: FC<Props> = ({ id, title, alt }) => {
  return (
    <div className={styles.wrapper}>
      <img src={`src/assets/program/${id}.svg`} alt={alt} className={styles.icon}/>
      {title && <h3>{title}</h3>}
    </div>
  );
};

export default Card;