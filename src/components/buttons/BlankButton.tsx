import React, { FC } from "react";
import { classNames } from "../../helpers/classNames";

import styles from "./BlankButton.module.scss";

type Props = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  disabled?: boolean;
  isSecondary?: boolean;
  children?: React.ReactNode;
  onHover?: (arg: boolean) => void;
};
const BlankButton: FC<Props> = ({
  className,
  disabled,
  onClick,
  children,
  onHover = () => undefined,
}) => {
  return (
    <button
      className={classNames(
        styles.button,
        className,
        disabled && styles.disabled
      )}
      onClick={onClick}
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
      type="button"
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default BlankButton;
