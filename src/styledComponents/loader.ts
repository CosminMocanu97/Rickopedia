import styled from "styled-components";

export const Loader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Img = styled.img`
  height:100px; 
  animation: spin infinite 2s linear;
  @keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
