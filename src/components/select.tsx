import { SelectProps } from "../interfaces/selectProps";
import { Select, Option, EmptyOption } from "../styledComponents/select";

const SelectField = ({ value, onChange, options }: SelectProps) => {
  return (
    <Select
      onChange={onChange}
      value={value}
      isValueSelected = {value ? true : false}
    >
      <EmptyOption className="emptyOption" value=""> All </EmptyOption>
      {options.map((option, key) => (
        <Option key={key} value={option}>
          {option}
        </Option>
      ))}
    </Select>
  );
};

export default SelectField;
