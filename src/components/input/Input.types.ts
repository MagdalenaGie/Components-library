import { ChangeEventHandler } from "react"

export interface InputProps {
    id?: string,
    label?: string,
    error?:boolean,
    message?: string,
    success?:boolean,
    disabled?: boolean,
    onChange?: ChangeEventHandler<HTMLInputElement>
}