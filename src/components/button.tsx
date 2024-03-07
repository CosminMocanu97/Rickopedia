import { ButtonProps } from "../interfaces/buttonProps";
import { Button, Img } from "../styledComponents/button";

const SearchButton = ({ label, type, imgSrc, alt }: ButtonProps) => {
  return (
    <Button type={type}>
      <Img src={imgSrc} alt={alt} /> {label}
    </Button>
  );
};

export default SearchButton;
