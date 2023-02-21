import React, { FC,Fragment } from 'react'
import styled from 'styled-components';
import { InputProps } from "./Input.types"

const Wrapper = styled.div`
  position: relative;
  margin: 10px;
`;

const StyledInput = styled.input`
  font-family: 'Montserrat';
  font-size: 18px;
  color: #fff;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 300px;
  border: none;
  border-bottom: 1px solid #fff;
  outline: none;
  background: transparent;
  &:focus {
    outline: none;
  }
`;

const StyledLabel = styled.label`
  font-family: 'Montserrat';
  color: #fff;
  font-size: 18px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 0.2s ease all;
  ${StyledInput}:focus ~ & {
    top: -18px;
    font-size: 14px;
    color: #03e9f4;
  }
  ${StyledInput}:valid ~ & {
    top: -18px;
    font-size: 14px;
    color: #03e9f4;
  }
`;

export const  Input: FC<InputProps> = ({id, disabled, label, message, error, success, onChange, ...props}) => {
    return (
      <Wrapper>
        <StyledInput required/>
        <StyledLabel>{label}</StyledLabel>
      </Wrapper>
    );
}