import {  MouseEventHandler } from "react"

export interface SelectableCardProps {
    value: number,
    selected: boolean,
    onClick?: MouseEventHandler<HTMLButtonElement>
}