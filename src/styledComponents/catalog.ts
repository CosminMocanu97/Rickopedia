import styled from "styled-components";
import { WIDTH641PX } from "../utils/breakpoints";

export const Catalog = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 70%;
  position: relative;
  gap: 15px;
  margin-bottom: 50px;

  @media (max-width: ${WIDTH641PX}) {
    width: 100%;
  }
`;
