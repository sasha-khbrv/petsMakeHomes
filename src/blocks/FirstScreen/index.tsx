import { FC } from "react";
import BlankButton from "../../components/buttons/BlankButton";
import ArrowIcon from "../../components/icons/ArrowIcon";
import ShareIcon from "../../components/icons/ShareIcon";
import { classNames } from "../../helpers/classNames";
import { PINK, WHITE } from "../../helpers/consts";
import styles from "./FirstScreen.module.scss";

const FirstScreen: FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <h1>
          Pets make homes
          <br />
          23—24.09
        </h1>
        <div className={styles.controls}>
          <BlankButton onClick={() => undefined} className={styles.shareBtn}>
            Tell friends{" "}
            <ShareIcon color={WHITE} className={styles.btnIcon} />
          </BlankButton>
          <BlankButton onClick={() => undefined} className={styles.moreBtn}>
            Read more <ArrowIcon color={PINK} className={styles.btnIcon} />
          </BlankButton>
        </div>
      </div>

      <img src="src/assets/familyPic.svg" className={styles.image} />
    </div>
  );
};

export default FirstScreen;
