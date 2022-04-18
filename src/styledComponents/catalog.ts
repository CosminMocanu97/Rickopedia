import styled from "styled-components";

export const Catalog = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 70%;
  position: relative;
  gap: 15px;
  margin-bottom: 50px;

  div {
    flex: 0 0 calc(20% - 30px);
  }

  @media (max-width: 641px) {
    width: 100%;
  }
`;
