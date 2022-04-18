
import styled from "styled-components";
import background from "../assets/background2.png";

export const CharacterDetailsContainer = styled.div`
  height: 100%;
  min-height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(${background});
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
  background-size: cover;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: left;

  .wrapper {
    margin-left: 4%;
    height: auto;
    width: 60%;
    white-space: normal;
    font-size: 18px;
    animation: fadein 1s;
  }

  .profile {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: RickAndMorty;
    color: #0bda51;

    img {
      height: 150px;
      width: 150px;
      border-radius: 5px;
    }
  }

  .characterInfo {
    display: flex;
    flex-direction: column;
    font-family: RickAndMorty;
    justify-content: flex-start;
    color: rgb(0, 176, 200);

    span {
      color: white;
    }

    div {
      display: flex;
      flex-direction: row;
      justify-content: center;
      gap: 30px;
    }
  }

  .list {
    font-family: RickAndMorty;
    font-size: 18px;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    color: rgb(0, 176, 200);

    span {
      font-weight: bold;
      color: #757575;
    }
  }

  .genderBadge {
    border: 2px solid #757575;
    padding: 2px 20px;
    font-weight: bold;
    border-radius: 10px;
    color: #757575;
    display: flex;
    gap: 10px;
    justifiy-content: center;
    align-items: center;

    img {
      height: 30px;
    }
  }

  .maleBadge {
    border: 2px solid rgb(31, 151, 245);
    padding: 2px 20px;
    font-weight: bold;
    border-radius: 10px;
    color: rgb(31, 151, 245);
    display: flex;
    gap: 10px;
    justifiy-content: center;
    align-items: center;

    img {
      height: 30px;
    }
  }

  .femaleBadge {
    border: 2px solid rgb(249, 108, 177);
    padding: 2px 20px;
    font-weight: bold;
    border-radius: 10px;
    color: rgb(249, 108, 177);
    display: flex;
    gap: 10px;
    justifiy-content: center;
    align-items: center;

    img {
      height: 30px;
    }
  }

  .alive,
  .dead,
  .unknown {
    display: flex;
    justifiy-content: center;
    align-items: center;

    img {
      height: 50px;
    }
  }

  .alive {
    color: #0bda51;
  }

  .dead {
    color: #ff0038;
  }

  .unknown {
    color: #757575;
  }

  .species {
    display: flex;
    justifiy-content: center;
    align-items: center;
    color: #e0ac69;

    img {
      margin-right: 5px;
      height: 40px;
    }
  }

  .location {
    display: flex;
    justifiy-content: center;
    align-items: center;
    color: #858585;

    img {
      height: 50px;
    }
  }

  .camera {
    height: 175px;
  }

  @media (max-width: 641px) {
    justify-content: center;

    .wrapper {
      width: 100%;
      margin: 0;
    }
  }

  @media (max-width: 420px) {
    .characterInfo {
      div {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 0px;
      }

      p {
        margin: 0;
        margin-top: 10px;
        margin-bottom: 5px;
      }
    }

    .list {
      padding: 5px;
    }
  }
`;
