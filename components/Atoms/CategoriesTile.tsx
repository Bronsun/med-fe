import Image from "next/image";

interface CategoriesTileProps {
  name: string;
  iconPath: string;
  onClick?: () => void;
  className?: string;
}

const CategoriesTile = (props: CategoriesTileProps) => {
  const onClickFunction = () => {
    if (props.onClick !== undefined) props.onClick();
  };
  const createClassname=()=>{
    if(props.className===undefined) return "categoriesTileDiv tile is-vertical is-clickable";
    if(props.className.includes('widthzero')) return props.className;
    return "categoriesTileDiv tile is-vertical is-clickable";
  }
  return (
    <div
      className={createClassname()}
      onClick={(e: any) => onClickFunction()}
    >
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
