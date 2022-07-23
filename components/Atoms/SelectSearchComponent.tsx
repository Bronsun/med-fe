import axios from "axios";
import { useState } from "react";
import SelectSearch from "react-select/async";

interface SelectComponentProps {
  URLcreator: (value: string) => string;
  onChange: (value: any) => void;
  selectedValue: string;
  placeholder: string;
}

const SelectSearchComponent = (
  props: SelectComponentProps
) => {
  const [inputValue, setValue] = useState("");
  const [selectedValue, setSelectedValue] = useState(null);

  const handleInputChange = (value: string) => {
    setValue(value);
  };

  const onChange = (value: any) => {
    props.onChange(value.value);
    setSelectedValue(value);
  };

  const loadOptions = async (
    inputValue: string
  ) =>
    axios
      .get(props.URLcreator(inputValue))
      .then((res) => {
        return res.data.response;
      });

  return (
    <div>
      <SelectSearch
        defaultOptions
        value={selectedValue}
        loadOptions={loadOptions}
        className="react-select-container"
        classNamePrefix="react-select"
        placeholder={props.placeholder}
        getOptionLabel={(e: any) => e.value }
        getOptionValue={(e: any) => e.value}
        onInputChange={handleInputChange}
        onChange={onChange}
      ></SelectSearch>
    </div>
  );
};

export default SelectSearchComponent;
