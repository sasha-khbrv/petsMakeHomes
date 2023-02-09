import { FC, useState } from "react";
import BlankButton from "../buttons/BlankButton";
import CloseMenuIcon from "../icons/CloseMenuIcon";
import MenuIcon from "../icons/MenuIcon";
import styles from "./Navigation.module.scss";

const Navigation: FC = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  return (
    <header className={styles.wrapper}>
      <div className={styles.headerLine}>
        <p>Festival of homeless animals</p>
        <p>Loft Project "Etagi"</p>
        <BlankButton
          onClick={() => setShowMenu((prev) => !prev)}
          className={styles.menuIcon}
        >
          {/* TODO: Add animation to icon */}
          {showMenu ? <CloseMenuIcon /> : <MenuIcon />}
        </BlankButton>
      </div>

      {showMenu && (
        <nav className={styles.menu}>
          {NAV_MAP.map((item) => (
            <a>{item.title}</a>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Navigation;

const NAV_MAP: Array<{ id: string; title: string }> = [
  { id: "program", title: "Program" },
  { id: "participants", title: "Participants" },
  { id: "schedule", title: "Schedule" },
  { id: "sponsors", title: "Sponsors" },
  { id: "contacts", title: "Contacts" },
];
