import {  MouseEventHandler } from "react"
export interface ButtonProps {
    label?: string,
    styleType?: "submit" | "reject" | "primary" | "secondary"
    disabled?: boolean,
    size?: "small" | "medium" | "large",
    onClick?: MouseEventHandler<HTMLButtonElement>
}