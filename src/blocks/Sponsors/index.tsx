import { FC } from "react";

const Sponsors: FC = () => {
  return (
    <div>
      <h2>Our sponsors</h2>
      <div>
        {SPONSORS_MAP.map((item) => (
          <SponsorsBlock item={item} />
        ))}
      </div>
    </div>
  );
};

export default Sponsors;

const SponsorsBlock: FC<{ item: SponsorsBlock }> = ({ item }) => {
  return (
    <div>
      <img src={`src/assets/sponsors/${item.id}.png`} alt={item.alt} />
    </div>
  );
};

type SponsorsBlock = {
  id: string;
  alt: string;
  link: string;
};

const SPONSORS_MAP: Array<SponsorsBlock> = [
  {
    id: "acana",
    alt: "Acana",
    link: "",
  },
  {
    id: "almo",
    alt: "Almo Nature",
    link: "",
  },
  {
    id: "barkingHeads",
    alt: "Barking Heads",
    link: "",
  },
  {
    id: "eukanuba",
    alt: "Eukanuba",
    link: "",
  },
  {
    id: "now",
    alt: "Now",
    link: "",
  },
  {
    id: "petshop",
    alt: "Petshop",
    link: "",
  },
  {
    id: "pronature",
    alt: "Pronature",
    link: "",
  },
  {
    id: "royalCanin",
    alt: "Royal Canin",
    link: "",
  },
];
