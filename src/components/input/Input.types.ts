import { ChangeEventHandler } from "react"

export interface InputProps {
    id?: string,
    label: string,
    disabled?: boolean,
    inputValue: string,
    onChange?: ChangeEventHandler<HTMLInputElement>
}