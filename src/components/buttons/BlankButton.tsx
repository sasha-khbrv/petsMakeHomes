import React, { FC } from "react";
import { classNames } from "../../helpers/classNames";

import styles from "./BlankButton.module.scss";

type Props = {
  onClick: () => void;
  className?: string;
  disabled?: boolean;
  isSecondary?: boolean;
  children?: React.ReactNode;
  onHover?: (arg: boolean) => void;
  tabIndex?: number;
};
const BlankButton: FC<Props> = ({
  className,
  disabled,
  onClick,
  children,
  onHover = () => undefined,
  tabIndex,
}) => {
  const handleKeyPress = (event: any) => {
    if (event.key === "Enter" || event.key === " ") {
      onClick();
    }
  };
  return (
    <button
      role="button"
      tabIndex={tabIndex}
      className={classNames(
        styles.button,
        className,
        disabled && styles.disabled
      )}
      onClick={onClick}
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
      onKeyDown={handleKeyPress}
      type="button"
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default BlankButton;
