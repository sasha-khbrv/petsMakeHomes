import { FC } from "react";

const Navigation: FC = () => {
  return (
    <nav>
      <div>Festival of homeless animals</div>
      <div>{NAV_MAP.map(item => <span>{item.title}</span>)}</div>
    </nav>
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
