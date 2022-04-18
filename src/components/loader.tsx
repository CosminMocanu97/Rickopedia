import portal from '../assets/portal.png'
import styled from 'styled-components';

const Loader = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);

    img {
        height:100px;
        animation: spin infinite 2s linear;
    }

    @keyframes spin {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`

const Loading = () => {
  return (
    <Loader>
        <img src={portal} alt="" />
    </Loader>
  );
};

export default Loading;
