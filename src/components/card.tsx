import { CardProps } from "../interfaces/cardProps";
import { CardContainer } from "../styledComponents/card";

const Card = ({ name, status, avatar, img, onClick }: CardProps) => {
  return (
    <CardContainer onClick={onClick}>
      <img src={avatar} alt="Avatar" className="avatar" />
      <div>
        <p>
          <b>{name}</b>
        </p>
        <p
          style={{
            color:
              status === "Alive"
                ? "#0BDA51"
                : status === "Dead"
                ? "#FF0038"
                : "#757575",
          }}
        >
          <img src={img} alt="" /> <b>{status}</b>{" "}
        </p>
      </div>
    </CardContainer>
  );
};

export default Card;
