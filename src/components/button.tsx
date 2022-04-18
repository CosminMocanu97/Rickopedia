import { ButtonProps } from "../interfaces/buttonProps";
import { Button } from "../styledComponents/button";

const SearchButton = ({ label, type, imgSrc, alt }: ButtonProps) => {
  return (
    <Button type={type}>
      <img src={imgSrc} alt={alt} /> {label}
    </Button>
  );
};

export default SearchButton;
