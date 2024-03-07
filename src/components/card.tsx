import { CardProps } from "../interfaces/cardProps";
import { CardContainer, Avatar, Paragraph, StatusParagraph, StatusImage } from "../styledComponents/card";

const Card = ({ name, status, avatar, onClick }: CardProps) => {
  return (
    <CardContainer onClick={onClick}>
      <Avatar src={avatar} alt="Avatar"/>
      <div>
        <Paragraph>
          <b>{name}</b>
        </Paragraph>

        <StatusParagraph status={status}>
          <StatusImage status={status} alt="" /> <b>{status}</b>
        </StatusParagraph>
      </div>
    </CardContainer>
  );
};

export default Card;
