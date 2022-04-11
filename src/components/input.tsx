import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
    height:30px;
    flex-basis:220px;
    border-radius: 5px;
    outline:none;
    box-shadow: 0px 0px 3px 2px rgb(180,217,74);
    color:rgb(0,176,200);
    font-family:RickAndMorty;
    font-size:20px;
    font-weight:bold;
    background-color:rgb(23,21,34);
    padding:3px 10px;
`

interface InputProps {
  value: string;
  onChange?: (e?: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const TextField = ({ value, placeholder, onChange }: InputProps) => {
  return (
    <Input type='text' onChange={onChange} value={value} placeholder={placeholder} />
  );
};

export default TextField;
