import { ChangeEventHandler } from "react"
import { SelectOptionProps } from "./selectOption/SelectOption.types"

export interface SelectProps{
    label: string,
    defaultValue?: string,    
    disabled?: boolean,
    grouped?: boolean,
    groups?: Map<number, string>
    multiSelect?: boolean,
    options: Array<SelectOptionProps>,
    onChange?: ChangeEventHandler<HTMLSelectElement> 
}