import {  MouseEventHandler } from "react"
export interface ButtonProps {
    text?: string,
    styleType?: "submit" | "reject" | "primary" | "secondary"
    disabled?: boolean,
    size?: "small" | "medium" | "large",
    onClick?: MouseEventHandler<HTMLButtonElement>
}