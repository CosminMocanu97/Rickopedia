import styled from "styled-components";

export const Select = styled.select`
  height: 33px;
  width: 150px;
  border-radius: 5px;
  outline: 1px solid #757575;
  font-weight: bold;
  font-family: RickAndMorty;
  font-size: 18px;
  background-color: rgb(26, 24, 38);
  padding: 3px 10px;

  option {
    color: rgb(0, 176, 200);
  }

  .emptyOption {
    color: #757575;
  }

  :focus {
    box-shadow: 0px 0px 3px 2px rgb(180, 217, 74);
    outline: none;
  }

  @media (max-width: 641px) {
    width: 220px;
  }
`;