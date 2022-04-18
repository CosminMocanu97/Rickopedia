import styled from "styled-components";
import background from "../assets/background.jpg";
import gun from "../assets/gun.png";

export const Container = styled.div`
  height: 100%;
  min-height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${background});
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
  background-size: cover;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: top;
  flex-direction: column;

  .logo {
    width: 35%;
    min-width: 270px;
    user-select: none;
  }

  .meeseeksBox {
    position: fixed;
    height: 50px;
    left: 0;
    margin: 10px;
    cursor: url(${gun}), pointer;
  }
`;
