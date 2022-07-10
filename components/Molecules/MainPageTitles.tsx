import Image from 'next/image'

interface MainPageTitlesProps{
    mainText:string;
    hTag:string;
}

const MainPageTitles=(props:MainPageTitlesProps)=>{
    
    var h:string
    
    if (props.hTag === "h1"){
        h ="<h1 className='title is-2'>{props.mainText}</h1>"
       }
       if (props.hTag === "h2"){
        <h2 className='title is-2'>{props.mainText}</h2>
       }
       if (props.hTag === "h3"){
        <h3 className='title is-2'>{props.mainText}</h3>
       }
       if (props.hTag === "h4"){
        <h4 className='title is-2'>{props.mainText}</h4>
       }
       if (props.hTag === "h5"){
        <h5 className='title is-2'>{props.mainText}</h5>
       }
       if (props.hTag === "h6"){
        <h6 className='title is-2'>{props.mainText}</h6>
       }
      
    return (
       
        
      
     
    )
    
    }
    
    export default MainPageTitles;