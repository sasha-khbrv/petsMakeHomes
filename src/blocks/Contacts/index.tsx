import { FC } from "react";
import IconButton from "../../components/buttons/IconButton";
import Footer from "../../components/Footer";
import FbIcon from "../../components/icons/socialMedia/FbIcon";
import InstaIcon from "../../components/icons/socialMedia/InstaIcon";
import TwitterIcon from "../../components/icons/socialMedia/TwitterIcon";
import styles from "./Contacts.module.scss";

const Contacts: FC = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>How to find us</h2>
      <div className={styles.address}>
        <h3>Adress</h3>
        <span>Ligovsky Ave., 74, 2nd floor, space Blue floor</span>
      </div>
      <div className={styles.contacts}>
        <h3>Contacts</h3>
        <span>+7 888 898-98-96</span>
        <span>info@homesweethome.com</span>
      </div>
      <div className={styles.social}>
        <IconButton onClick={() => undefined} Icon={FbIcon}/>
        <IconButton onClick={() => undefined} Icon={InstaIcon}/>
        <IconButton onClick={() => undefined} Icon={TwitterIcon}/>
      </div>
      <Footer className={styles.footer} />
    </div>
  );
};

export default Contacts;
