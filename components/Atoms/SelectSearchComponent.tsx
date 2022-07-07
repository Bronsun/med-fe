import { useState } from "react";
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
  const [value, setValue] = useState<string>("");

  return (
    <div>
      <h1>{value}</h1>
      <SelectSearch
        options={options}
        search={true}
        value={value}
        placeholder="Choose your language"
        filterOptions={(options) => (query) =>
          options.filter((item) =>
            item.name.toLowerCase().includes(query.toLocaleLowerCase())
          )}
        onChange={(...args: any) => {
          setValue(args[1].name);
        }}
      />
    </div>
  );
};

export default SelectSearchComponent;
