import styled from "styled-components";
import { WIDTH641PX } from "../utils/breakpoints";

export const Form = styled.form`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 1%;
  margin-bottom: 1%;

  @media (max-width: ${WIDTH641PX}) {
    flex-direction: column;
    margin-top:5%;
  }
`;

