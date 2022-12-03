import React from "react";
import styled from "styled-components";
import { SelectProps } from "./Select.types";
import { SelectOptionProps } from "./selectOption/SelectOption.types";
import {Option} from "./selectOption/SelectOption";

const StyledSelect = styled.select<SelectProps>`
    background-color: white;
    border: 1px solid gray;
    border-radius: 2px;
    padding: 8px;
    font-family: 'Anton', sans-serif;
`;

export const Select: React.FC<SelectProps> = ({label, defaultValue, disabled, grouped, groups, multiSelect, options, onChange, ...props}) => {
  
    const prepareOptionsToDisplay = (options: Array<SelectOptionProps>) : Array<JSX.Element> => {
        let optionsToDisplay: Array<JSX.Element> = [];
        options.forEach(option => {
            optionsToDisplay.push(<Option key={option.key} label={option.label} value={option.value}></Option>)
        });
        return optionsToDisplay;
    }

    const prepareGroupedOptionsToDisplay = (options:Array<SelectOptionProps>, groups: Map<number, string>) : Array<JSX.Element> => {
        let groupedOptionsToDisplay: Array<JSX.Element> = [];
        for( const [key, value] of groups.entries()){
            groupedOptionsToDisplay.push(<optgroup label={value}/>);
            let optionsInGroup = options.filter(option => option.groupId === key);
            groupedOptionsToDisplay.push(...prepareOptionsToDisplay(optionsInGroup));
        }
        return groupedOptionsToDisplay;
    }

    return (
        <StyledSelect label={label} defaultValue={defaultValue} disabled={disabled} multiSelect={multiSelect} options={options} onChange={onChange}>
            {grouped && groups ? prepareGroupedOptionsToDisplay(options, groups) : prepareOptionsToDisplay(options)}
        </StyledSelect>
    )
}