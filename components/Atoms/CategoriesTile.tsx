import Image from "next/image";

interface CategoriesTileProps {
  name: string;
  iconPath: string;
}

const CategoriesTile = (props: CategoriesTileProps) => {
  return (
    <div className="tile is-vertical categoriesTileDiv is-clickable">
      <div className="column is-gapless">
        <div className="has-text-centered">
          <Image src={props.iconPath} alt={props.name} width={32} height={32} />
          <p className="has-text-centered">{props.name}</p>
        </div>
      </div>
    </div>
  );
};

export default CategoriesTile;
