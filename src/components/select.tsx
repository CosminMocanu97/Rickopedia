import { SelectProps } from "../interfaces/selectProps";
import { Select } from "../styledComponents/select";

const SelectField = ({ value, onChange, options }: SelectProps) => {
  return (
    <Select
      onChange={onChange}
      value={value}
      style={value ? { color: "#00b1c8" } : { color: "#757575" }}
    >
      <option className="emptyOption" value=""> All </option>
      {options.map((option, key) => (
        <option key={key} value={option}>
          {option}
        </option>
      ))}
    </Select>
  );
};

export default SelectField;
