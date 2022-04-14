import React from 'react';
import styled from 'styled-components';
import picklerick from '../assets/picklerick.png'

const Select = styled.select`
    height:35px;
    width:150px;
    border-radius: 5px;
    outline:none;
    box-shadow: 0px 0px 3px 2px rgb(180,217,74);
    font-weight:bold;
    font-family:RickAndMorty;
    font-size:18px;
    background-color:rgb(26,24,38);
    padding:3px 10px;

    option {
        color:rgb(0,176,200);
        cursor:url(${picklerick}), pointer;
    }
`

interface SelectProps {
  onChange?: (e?: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
  value: string;
}

const SelectField = ({ value, onChange, options}: SelectProps) => {
  return (
    <Select onChange={onChange} value={value} style={value ? {color:'#00b1c8'} : {color:'#757575'}}>
        <option value='' selected disabled hidden> Status </option>
        {options.map((option, key) => (
            <option key={key} value={option}> {option} </option>
        ))}
    </Select>
  );
};

export default SelectField;
