import { useState,useRef } from "react";
import SelectSearch, { useSelect } from "react-select-search";

/**
 * The options array should contain objects.
 * Required keys are "name" and "value" but you can have and use any number of key/value pairs.
 */
const options = [
  { name: "Swedish", value: "sv" },
  { name: "English", value: "en" },
  { name: "Polish", value: "pl" },
];



const SelectSearchComponent = () => {
  function handleSelect(data:any) {
    setSelectedOptions(data);
  }
const [selectedOptions, setSelectedOptions] = useState();

return (
  <div>
    
    <SelectSearch 
    options={[]}
    placeholder="Select color"
    search={true}
    value={selectedOptions}
    onChange={handleSelect}
    filterOptions={(options) => (query) =>
      options.filter((item) =>
        item.name.toLowerCase().includes(query.toLocaleLowerCase())
      )}
      
    ></SelectSearch>
  </div>
);
};

export default SelectSearchComponent;
