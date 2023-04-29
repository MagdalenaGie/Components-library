import React, { FC,Fragment } from 'react'
import './temp.css'
import { CheckboxProps } from "./Checkbox.types"

const  Checkbox: FC<CheckboxProps> = ({id, disabled, label, isChecked, onChange, ...props}) => {
    return (
        <label className="b-contain">
            <span>{label}</span>
            <input type="checkbox" checked={isChecked} onChange={onChange}/>
            <div className="b-input"></div>
        </label>
    );
}

export default Checkbox;