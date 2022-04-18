import styled from "styled-components";

export const Form = styled.form`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 1%;
  margin-bottom: 1%;

  @media (max-width: 641px) {
    flex-direction: column;

    img {
      margin-top: -35px;
    }
  }
`;
