import { FC } from "react";

const Program: FC = () => {
  return (
    <div>
      <h2>What awaits you</h2>
      <div>{PROGRAM_MAP.map(item => <ProgramBlock item={item}/>)}</div>
    </div>
  );
};

export default Program;

const ProgramBlock: FC<{ item: ProgramBlock }> = ({ item }) => {
  return (
    <div>
      <img src={`src/assets/program/${item.id}.svg`} alt={item.alt} />
      <h3>{item.title}</h3>
      
    </div>
  );
};

type ProgramBlock = {
  id: string;
  title: string;
  alt: string;
};

const PROGRAM_MAP: Array<ProgramBlock> = [
  {
    id: "pets",
    title: "Dogs and cats looking for a family",
    alt: "Image of yellow cat with black years and closed eyes on a pink and beige blob background",
  },
  {
    id: "lectures",
    title: "Lectures from vets and zoopsychologists",
    alt: "Image of humans heads in a profile on a pink and beige blob background",
  },
  {
    id: "consultation",
    title: "Consultations of vets and zoopsychologists",
    alt: "Image of three smiles imojies on a pink and beige blob background",
  },
  {
    id: "perfomances",
    title: "Auction and gifts from our partners",
    alt: "Image of a rabit in a magician's hat on a pink and beige blob background",
  },
  {
    id: "charity",
    title: "Charity area next to each shelter",
    alt: "Image of gift box on a pink and beige blob background",
  },
];
