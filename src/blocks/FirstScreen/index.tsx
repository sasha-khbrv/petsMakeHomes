import { FC } from "react";
import ShareIcon from "../../components/icons/ShareIcon";
import styles from "./FirstScreen.module.scss";

const FirstScreen: FC = () => {
  return (
    <div className={styles.wrapper}>
      <div>
        <h1>
          <span>Pets make homes</span>
          <span>23—24.09</span>
        </h1>
        <button>
          Tell friends <ShareIcon />
        </button>
      </div>
      <img src="src/assets/familyPic.svg" />
    </div>
  );
};

export default FirstScreen;
