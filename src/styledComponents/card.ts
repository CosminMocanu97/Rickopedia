import styled from "styled-components";
import gun from "../assets/gun.png";

export const CardContainer = styled.div`
  box-shadow: 0px 0px 3px 2px rgb(180, 217, 74);
  transition: 0.3s;
  min-width: 150px;
  padding: 5px 8px;
  border-radius: 12px;
  font-family: RickAndMorty;
  font-size: 15px;
  background-color: rgb(26, 24, 38);
  display: flex;
  flex-direction: column;
  gap: 5px;
  animation: fadein 1s;

  .avatar {
    width: 100%;
    border-radius: 12px;
    flex: 1;
    cursor: url(${gun}), pointer;
  }

  div img {
    height: 40px;
    width: 40px;
    flex: 0;
  }

  p {
    margin: 0;
    color: rgb(0, 176, 200);
  }

  p:nth-child(2) {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @keyframes fadein {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
  }
`;