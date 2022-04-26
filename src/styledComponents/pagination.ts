import styled, { css } from "styled-components";
import gun from "../assets/gun.webp";

export const PaginationWrapper = styled.div<{page: number, totalPages: number}>`
  padding: 2rem 0;
  display: flex;
  justify-content: center;

  .separator {
    width: 1rem;
    margin: 0 0.1rem;
    color: #00b0c8;
    font-weight: bold;
  }
  .pageItem {
    background: rgb(26, 24, 38);
    border: none;
    height: 2rem;
    width: 2rem;
    margin: 0 1px;
    border-radius: 20%;
    font-weight: bold;
    color: #00b0c8;
    &:hover {
      box-shadow: 0px 0px 3px 2px rgb(180, 217, 74);
      outline: none;
      cursor: url(${gun}), pointer;
    }
    &:focus {
      outline: 0;
    }
  }
  .active {
    background-color: green;
    color: #faf9f6f1;
    box-shadow: none;
  }
`;

export const Separator = styled.div`
  width: 1rem;
  margin: 0 0.1rem;
  color: #00b0c8;
  font-weight: bold;
`

const baseButton = css`
  background: rgb(26, 24, 38);
  border: none;
  height: 2rem;
  width: 2rem;
  margin: 0 1px;
  border-radius: 20%;
  font-weight: bold;
  color: #00b0c8;
  &:hover {
    box-shadow: 0px 0px 3px 2px rgb(180, 217, 74);
    outline: none;
    cursor: url(${gun}), pointer;
  }
  &:focus {
    outline: 0;
  }
`

export const PageItem = styled.button`
  ${baseButton}
`

export const ActivePageItem = styled.button`
  ${baseButton}
  background-color: #00b0c8;
  color: #faf9f6f1;
  box-shadow: none;
`