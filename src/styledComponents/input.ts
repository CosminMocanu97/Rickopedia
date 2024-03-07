import styled from "styled-components";

export const Input = styled.input`
  height: 25px;
  width: 200px;
  border-radius: 5px;
  outline: 2px solid #757575;
  border: none;
  color: rgb(0, 176, 200);
  font-family: RickAndMorty;
  font-size: 18px;
  font-weight: bold;
  background-color: rgb(23, 21, 34);
  padding: 3px 10px;

  :focus {
    box-shadow: 0px 0px 3px 2px rgb(180, 217, 74);
    outline: none;
  }
`;
