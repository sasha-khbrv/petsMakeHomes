import React, { FC } from "react";
import { classNames } from "../../helpers/classNames";
import BlankButton from "../buttons/BlankButton";
import styles from "./Tabs.module.scss";

export type Tab = { id: string; title: string };
type Props = {
  list: Array<Tab>;
  onClick: (tab: Tab) => void;
  activeTab: Tab;
  className?: string;
};

const Tabs: FC<Props> = ({ list, onClick, activeTab, className }) => {
  return (
    <div className={classNames(styles.wrapper, className)}>
      {list.map((btn) => {
        const isActive = btn.id === activeTab.id;
        const btnClass = isActive ? styles.activeBtn : styles.basicBtn;
        return (
          <BlankButton
            key={btn.id}
            onClick={() => onClick(btn)}
            className={btnClass}
          >
            {btn.title}
          </BlankButton>
        );
      })}
    </div>
  );
};

export default Tabs;
