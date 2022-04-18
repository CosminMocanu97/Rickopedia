import { InputProps } from "../interfaces/inputProps";
import { Input } from "../styledComponents/input";

const TextField = ({ value, placeholder, onChange }: InputProps) => {
  return (
    <Input
      type="text"
      onChange={onChange}
      value={value}
      placeholder={placeholder}
    />
  );
};

export default TextField;
