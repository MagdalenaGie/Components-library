import { ChangeEventHandler } from "react";

export interface CheckboxProps {
    id?: string,
    label: string,
    disabled?: boolean,
    isChecked: boolean,
    onChange: ChangeEventHandler<HTMLInputElement>
}