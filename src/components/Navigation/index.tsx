import { FC, useState } from "react";
import { classNames } from "../../helpers/classNames";
import { NAV_MAP } from "../../helpers/consts";
import BlankButton from "../buttons/BlankButton";
import CloseMenuIcon from "../icons/CloseMenuIcon";
import MenuIcon from "../icons/MenuIcon";
import { Link, animateScroll } from "react-scroll";
import styles from "./Navigation.module.scss";

const Navigation: FC = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  return (
    <header
      className={classNames(styles.wrapper, showMenu && styles.showMenuState)}
    >
      <div className={styles.headerLine}>
        <p
          onClick={() => animateScroll.scrollToTop()}
          className={styles.logoLink}
        >
          Festival of homeless animals
        </p>
        <p>Loft Project "Etagi"</p>
        <BlankButton
          onClick={() => setShowMenu((prev) => !prev)}
          className={styles.menuIcon}
        >
          {showMenu ? <CloseMenuIcon /> : <MenuIcon />}
        </BlankButton>
      </div>

      <nav className={classNames(styles.menu, showMenu && styles.showMenu)}>
        {Object.keys(NAV_MAP).map((key, i) => (
          <Link
            to={key}
            key={NAV_MAP[key] + i}
            className={styles.link}
            smooth={true}
            duration={500}
            offset={-120}
          >
            {NAV_MAP[key]}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Navigation;
