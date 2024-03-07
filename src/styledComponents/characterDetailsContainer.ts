import styled, { css } from "styled-components";
// Images
import background from "../assets/background2.webp";
import male from "../assets/male.webp";
import female from "../assets/female.webp";
import genderless from "../assets/genderless.webp";
import unknown from "../assets/unknown.webp";
import heart from "../assets/heart.webp";
import dead from "../assets/dead.webp";
import camera from "../assets/camera.webp";
import species from "../assets/species.webp";
import location from "../assets/location.webp";
// Breakpoints
import { WIDTH641PX, WIDTH420PX } from "../utils/breakpoints";

export const CharacterDetailsContainer = styled.div`
  height: 100%;
  min-height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    url(${background});
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: left;

  @media (max-width: ${WIDTH641PX}) {
    justify-content: center;
  }

  @media (min-width: ${WIDTH641PX}) {
    background-size: cover;
  }
`;

export const Wrapper = styled.div`
  margin-left: 4%;
  min-height: 100vh;
  height: auto;
  width: 60%;
  white-space: normal;
  font-size: 18px;
  animation: fadein 1s;

  @media (max-width: ${WIDTH641PX}) {
    width: 100%;
    margin: 0;
  }
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: RickAndMorty;
  color: #0bda51;
`;

export const Avatar = styled.img`
  height: 150px;
  width: 150px;
  border-radius: 5px;
`;

export const CharacterInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-family: RickAndMorty;
  justify-content: flex-start;
  color: rgb(0, 176, 200);
`;

export const GenderBadge = styled.div<{ gender?: string }>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 30px;

  p {
    ${(props) =>
      props.gender === "Male"
        ? `
      border: 2px solid rgb(31, 151, 245);
      color: rgb(31, 151, 245);

      img {
        content: url(${male});
      }
    `
        : props.gender === "Female"
        ? `
      border: 2px solid rgb(249, 108, 177);
      color: rgb(249, 108, 177);

      img {
        content: url(${female});
      }
    `
        : props.gender === "Genderless"
        ? `
      border: 2px solid #757575;
      color: #757575;

      img {
        content: url(${genderless});
      } 
    `
        : `
      border: 2px solid #757575;
      color: #757575;

      img {
        content: url(${unknown});
      }
    `}

    padding: 2px 20px;
    font-weight: bold;
    border-radius: 10px;
    display: flex;
    gap: 10px;
    justifiy-content: center;
    align-items: center;

    img {
      height: 30px;
    }
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 30px;

  @media (max-width: ${WIDTH420PX}) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0px;

    p {
      margin: 0;
      margin-bottom: 5px;
    }
  }
`;

const paragraph = css`
  display: flex;
  justifiy-content: center;
  align-items: center;
  font-weight: bold;
`;

export const Species = styled.p`
  ${paragraph}
  color: #e0ac69;

  img {
    content:url(${species});
    margin-right: 5px;
    height: 40px;
  }
`;

export const Location = styled.p`
  ${paragraph}
  color: #858585;

  img {
    content: url(${location});
    margin-right: 5px;
    height: 50px;
  }
`;

export const Status = styled.p<{ status?: string }>`
  ${paragraph}

  ${(props) =>
    props.status === "Alive"
      ? `
    color: #0bda51;

    img {
      content: url(${heart});
    }
    `
      : props.status === "Dead"
      ? `color: #ff0038 ;

    img {
      content: url(${dead});
    }
    `
      : `color: #757575;
    
    img {
      content: url(${unknown});
    }`}

    img {
    height: 50px;
  }
`;

export const CameraImage = styled.img`
  height: 175px;
  content: url(${camera});

  @media (max-width: ${WIDTH420PX}) {
    height: 15vh;
  }
`;

export const UnorderedList = styled.ul`
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

  @media (max-width: ${WIDTH420PX}) {
    padding: 5px;
  }
`;
