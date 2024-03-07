import portal from "../assets/portal.webp";
import { Loader, Img } from "../styledComponents/loader";

const Loading = () => {
  return (
    <Loader>
      <Img src={portal} alt="" />
    </Loader>
  );
};

export default Loading;
