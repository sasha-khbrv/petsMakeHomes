import React, { FC } from "react";
import { classNames } from "../../helpers/classNames";

import styles from "./BlankButton.module.scss";

type Props = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  disabled?: boolean;
  isSecondary?: boolean;
  children?: React.ReactNode;
};
const BlankButton: FC<Props> = ({ className, disabled, onClick, children }) => {
  return (
    <button
      className={classNames(
        styles.button,
        className,
        disabled && styles.disabled
      )}
      onClick={onClick}
      type="button"
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default BlankButton;
