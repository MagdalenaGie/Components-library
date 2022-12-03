import React from "react";
import styled from "styled-components";
import { SelectOptionProps } from "./SelectOption.types";

const StyledSelectOption = styled.option<SelectOptionProps>`
`

export const Option: React.FC<SelectOptionProps> = ({label, value, key, ...props}) => {
    return (
        <StyledSelectOption key={key} value={value} label={label} {...props}>
        </StyledSelectOption>
    )
}