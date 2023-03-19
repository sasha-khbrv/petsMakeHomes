import { SECTION_ID } from "./types";

export const FONT_PRIMARY = "var(--font-primary)";
export const FONT_SECONDARY = "var(--font-secondary)";
export const WHITE = "var(--white)";
export const PINK = "var(--pink)";
export const PINK_DARKER = "var(--pink-darker)";
export const GREEN = "var(--green)";
export const GREEN_DARKER = "var(--green-darker)";

export const NAV_MAP: {
  [key: string]: string;
} = {
  [SECTION_ID.HOME]: "Home",
  [SECTION_ID.PROGRAMME]: "Programme",
  [SECTION_ID.PARTISIPANTS]: "Participants",
  [SECTION_ID.SCHEDULE]: "Schedule",
  [SECTION_ID.SPONSORS]: "Sponsors",
  [SECTION_ID.CONTACTS]: "Contacts",
};
