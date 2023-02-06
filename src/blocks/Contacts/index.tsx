import { FC } from "react";
import Footer from "../../components/Footer";

const Contacts: FC = () => {
  return (
    <div>
      <h2>How to find us</h2>
      <div>
        <div>
          <h3>Adress</h3>
          <span>Ligovsky Ave., 74, 2nd floor, sspanace Blue floor</span>
        </div>
        <div>
          <h3>Contacts</h3>
          <span>+7 888 898-98-96</span>
          <span>info@homesweethome.com</span>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contacts;
