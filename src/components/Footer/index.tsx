import { FC } from "react";
import { classNames } from "../../helpers/classNames";
import TextButton from "../buttons/TextButton";
import ArrowIcon from "../icons/ArrowIcon";
import { animateScroll } from "react-scroll";
import styles from "./Footer.module.scss";

const Footer: FC<{ className: string }> = ({ className }) => {
  return (
    <div className={classNames(styles.wrapper, className)}>
      <span>© 2019. Lwccts</span>
      <TextButton
        onClick={() => animateScroll.scrollToTop()}
        title={"Back to top"}
        Icon={ArrowIcon}
        iconClassName={styles.arrowIcon}
      />
    </div>
  );
};
export default Footer;
