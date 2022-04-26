import styled from "styled-components";
import ship from "../assets/ship.webp";
import { WIDTH641PX } from "../utils/breakpoints";

export const Button = styled.button`
  background: transparent;
  border: none;
  height: 125px;
  width: 130px;
  border-radius: 50%;

  @media (max-width: ${WIDTH641PX}) {
    margin-top: -20px;
  }
`;

export const Img = styled.img`
  animation: spin infinite 10s linear;
  display: block;
  width: 100%;
  height: 100%;
  border-radius:50%;
  cursor:url(${ship}), pointer;
  user-select:none;

  @keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
