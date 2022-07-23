import CategoriesTile from "../Atoms/CategoriesTile";
import categoriesData from "../../assets/categories.json";
import { useState } from "react";
import Image from "next/image";
import AnimateHeight from "react-animate-height";
import { isMobile } from "react-device-detect";

interface CategoriesBarProps {
  style?: {};
}

const CategoriesBar = (props: CategoriesBarProps) => {
  const NUMBER_OF_CATEGORIES_VISIBLE = isMobile
    ? categoriesData.categories.length
    : 10;

  const [openList, setOpenList] = useState<boolean>(false);
  const [listHeight, setListHeight] = useState<any>(0);

  const toggleList = (value: boolean) => {
    setOpenList(value);
    setListHeight(listHeight === 0 ? "auto" : 0);
  };

  return (
    <div style={props.style}>
      <div className="tile categoriesBarDiv">
        {categoriesData.categories
          .filter((_, index) => index < NUMBER_OF_CATEGORIES_VISIBLE)
          .map((category, index) => (
            <CategoriesTile
              name={category.name}
              iconPath={category.iconPath}
              key={index}
            />
          ))}
        {categoriesData.categories.length > NUMBER_OF_CATEGORIES_VISIBLE && (
          <CategoriesTile
            className={`${openList ? "widthzero" : ""}`}
            name="pozostałe"
            iconPath="/categoryIcons/more.png"
            key={NUMBER_OF_CATEGORIES_VISIBLE + 1}
            onClick={() => toggleList(true)}
          />
        )}
      </div>
      <AnimateHeight duration={500} height={listHeight}>
        {[
          ...Array(
            Math.floor(
              categoriesData.categories.length / NUMBER_OF_CATEGORIES_VISIBLE
            )
          ),
        ].map((_, row) => (
          <div key={row} className="tile moreCategoriesBox">
            {categoriesData.categories
              .filter(
                (_, index) =>
                  index >= (row + 1) * NUMBER_OF_CATEGORIES_VISIBLE &&
                  index < (row + 2) * NUMBER_OF_CATEGORIES_VISIBLE
              )
              .map((category, index) => (
                <CategoriesTile
                  name={category.name}
                  iconPath={category.iconPath}
                  key={index}
                />
              ))}
          </div>
        ))}
        <button
          className="closeCategoriesList"
          onClick={(e: any) => toggleList(false)}
        >
          <Image src="/collapse-arrow.png" width={40} height={28} alt="close" />
        </button>
      </AnimateHeight>
    </div>
  );
};

export default CategoriesBar;
