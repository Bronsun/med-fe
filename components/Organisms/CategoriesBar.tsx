import CategoriesTile from "../Atoms/CategoriesTile";
import categoriesData from "../../assets/categories.json";


const CategoriesBar=()=>{
    return (
        <div className="tile categoriesBarDiv">
            {categoriesData.categories.map((category, index)=>
            <CategoriesTile name={category.name} iconPath={category.iconPath} key={index}/>)}
        </div>
    )
    
    }
    
    export default CategoriesBar;