import {  MouseEventHandler } from "react"
export interface ButtonProps {
    label?: string,
    styleType?: "yellow" | "orange" | "raspberry" | "yellow" | "turquise"
    disabled?: boolean,
    size?: "small" | "medium" | "large",
    onClick?: MouseEventHandler<HTMLButtonElement>
}