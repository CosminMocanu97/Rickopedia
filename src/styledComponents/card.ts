import styled from "styled-components";
// Images
import gun from "../assets/gun.webp";
import heart from "../assets/heart.webp";
import dead from "../assets/dead.webp";
import unknown from "../assets/unknown.webp";

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
  flex: 0 0 calc(20% - 30px);

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const Avatar = styled.img`
  width: 100%;
  border-radius: 12px;
  flex: 1;
  cursor: url(${gun}), pointer;
`;

export const StatusParagraph = styled.p<{ status?: string }>`
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) =>
    props.status === "Alive"
      ? "#0BDA51"
      : props.status === "Dead"
      ? "#FF0038"
      : "#757575"};
`;

export const StatusImage = styled.img<{ status?: string }>`
  height: 40px;
  width: 40px;
  flex: 0;
  content: url(${(props) =>
    props.status === "Alive"
      ? heart
      : props.status === "Dead"
      ? dead
      : unknown});
`;

export const Paragraph = styled.p`
  margin: 0;
  color: rgb(0, 176, 200);
`;
