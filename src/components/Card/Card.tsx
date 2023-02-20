import { FC } from "react";
import styles from "./Card.module.scss";

export type CardType = {
  id: string;
  title?: string;
  alt: string;
  link?: string;
};

type Props = CardType & {
  imgSpecification: { folder: string; extension: string };
  imgClassName?: string;
};

const Card: FC<Props> = ({
  id,
  title,
  alt,
  link,
  imgSpecification,
  imgClassName,
}) => {
  const body = (
    <>
      <img
        src={`src/assets/${imgSpecification.folder}/${id}.${imgSpecification.extension}`}
        alt={alt}
        className={imgClassName}
      />
      {title && <h3>{title}</h3>}
    </>
  );
  return (
    <div className={styles.wrapper}>
      {link ? (
        <a href={link} target={"_blank"}>
          {body}
        </a>
      ) : (
        body
      )}
    </div>
  );
};

export default Card;
