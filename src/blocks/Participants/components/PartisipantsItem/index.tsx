import { FC } from "react";

export type ParticipantBlock = {
  title: string;
  description: string;
};

type Props = { item: ParticipantBlock; i: number };

const PartisipantsItem: FC<Props> = ({ item, i }) => {
  return (
    <>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
    </>
  );
};

export default PartisipantsItem;
