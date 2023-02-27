import { FC } from "react";
import ArrowIcon from "../icons/ArrowIcon";

const Footer: FC<{ className: string }> = ({ className }) => {
  return (
    <div className={className}>
      <span>© 2019. Lwccts</span>
      <span>
        Back to top <ArrowIcon />
      </span>
    </div>
  );
};
export default Footer;
