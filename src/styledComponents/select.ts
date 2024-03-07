import styled from "styled-components";
import { WIDTH641PX } from "../utils/breakpoints";

export const Select = styled.select<{ isValueSelected?: boolean }>`
  color: ${(props) => (props.isValueSelected ? "#00b1c8" : "#757575")};
  height: 33px;
  width: 150px;
  border-radius: 5px;
  outline: 1px solid #757575;
  font-weight: bold;
  font-family: RickAndMorty;
  font-size: 18px;
  background-color: rgb(26, 24, 38);
  padding: 3px 10px;

  :focus {
    box-shadow: 0px 0px 3px 2px rgb(180, 217, 74);
    outline: none;
  }

  @media (max-width: ${WIDTH641PX}) {
    width: 220px;
  }
`;

export const Option = styled.option`
  color: rgb(0, 176, 200);
`;

export const EmptyOption = styled.option`
  color: #757575;
`;
