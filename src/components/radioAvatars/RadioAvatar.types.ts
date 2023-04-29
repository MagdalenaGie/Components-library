import { Dispatch, MouseEventHandler } from "react";

export interface AvatarBtnProps {
    id?: string,
    avatarId: number,
    selected: boolean,
    disabled?: boolean,
    onClick?: MouseEventHandler<HTMLButtonElement>
}

export interface RadioAvatarsProps {
    avatarIdValue: number,
    avatarIdSetter: Dispatch<React.SetStateAction<number>>,
    disabled?: boolean
}