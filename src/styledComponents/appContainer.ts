import styled from "styled-components";
// Images
import background from "../assets/background.jpg";
import gun from "../assets/gun.webp";
// Breakpoints
import { WIDTH641PX } from "../utils/breakpoints";

export const Container = styled.div`
  height: 100%;
  min-height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${background});
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: top;
  flex-direction: column;

  @media (min-width: ${WIDTH641PX}) {
    background-size: cover;
  }
`;

export const Logo = styled.img`
  width: 35%;
  min-width: 270px;
  user-select: none;
`;

export const MeeseeksBox = styled.img`
  user-select: none;
  position: fixed;
  height: 50px;
  left: 0;
  margin: 10px;
  cursor: url(${gun}), pointer;
`;
