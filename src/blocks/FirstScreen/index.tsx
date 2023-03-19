import { FC } from "react";
import BlankButton from "../../components/buttons/BlankButton";
import ArrowIcon from "../../components/icons/ArrowIcon";
import ShareIcon from "../../components/icons/ShareIcon";
import { NAV_MAP, PINK, WHITE } from "../../helpers/consts";
import { SECTION_ID } from "../../helpers/types";
import { animateScroll } from "react-scroll";
import styles from "./FirstScreen.module.scss";

const FirstScreen: FC = () => {
  const goToSection = () => {
    const sectionElement = document.getElementById(SECTION_ID.PROGRAMME);
    if (!sectionElement) return;

    const offsetTop = sectionElement.offsetTop;

    animateScroll.scrollTo(offsetTop, {
      duration: 500,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <div className={styles.wrapper} id={SECTION_ID.HOME}>
      <div className={styles.content}>
        <h1>
          Pets make homes
          <br />
          23—24.09
        </h1>
        <div className={styles.controls}>
          <BlankButton onClick={() => undefined} className={styles.shareBtn} disabled>
            Tell friends <ShareIcon color={WHITE} className={styles.btnIcon} />
          </BlankButton>
          <BlankButton onClick={goToSection} className={styles.moreBtn}>
            Read more <ArrowIcon color={PINK} className={styles.btnIcon} />
          </BlankButton>
        </div>
      </div>

      <img src="src/assets/familyPic.svg" className={styles.image} />
    </div>
  );
};

export default FirstScreen;
