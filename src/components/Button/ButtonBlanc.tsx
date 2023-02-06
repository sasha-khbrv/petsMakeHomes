import React, { FC, ReactElement } from "react";

type Props = { id: string; ariaLabel: string; text: string | ReactElement };

const ButtonBlanc: FC<Props> = ({ id, ariaLabel, text }) => {
  return (
    <button id={id} aria-labelledby={ariaLabel} tabIndex={0} type="button">
      <span id={ariaLabel}>{text}</span>
    </button>
  );
};

export default ButtonBlanc;
