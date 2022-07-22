import Image from 'next/image';

interface MainPageTileProps{
    mainText:string;
    text:string;
    iconPath: string;
}

const MainPageTile=(props:MainPageTileProps)=>{

    return (
        <div className="tile is-vertical mainPageTile is-clickable">
      <div className="column is-gapless">
        <div className="has-text-centered">
          <Image src={props.iconPath} alt={props.mainText} width={40} height={40} />
          <h4 className="has-text-centered">{props.mainText}</h4>
          <p className='has-text-centered'>{props.text}</p>
        </div>
      </div>
    </div>
    )
    
    }
    
    export default MainPageTile;