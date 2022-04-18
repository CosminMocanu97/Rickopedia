import styled from "styled-components";
import ship from "../assets/ship.webp";

export const Button = styled.button`
    background:transparent;
    border:none;
    height:125px;
    width:130px;
    border-radius:50%;

    img {
        animation: spin infinite 10s linear;
        display: block;
        width: 100%;
        height: 100%;
        border-radius:50%;
        cursor:url(${ship}), pointer;
        user-select:none;
    }

    @keyframes spin {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;
