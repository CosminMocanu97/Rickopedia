import React from 'react';
import styled from 'styled-components';
import ship from '../assets/ship.png'

const Button = styled.button`
    background:transparent;
    border:none;
    height:145px;
    width:160px;
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
`

interface ButtonProps {
  alt: string;
  type: 'button' | 'submit' | 'reset' ;
  label?: string;
  imgSrc?: any;
}

const SearchButton = ({ label, type, imgSrc, alt }: ButtonProps) => {
  return (
    <Button type={type}> <img src={imgSrc} alt={alt} /> {label} </Button>
  );
};

export default SearchButton;
