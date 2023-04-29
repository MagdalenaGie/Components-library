export interface Player {
    guid: string,
    name: string,
    isSpectator: boolean
    avatarId: number
}

export interface PlayerCardProps {
    value?: number,
    selected: boolean,
    revealed: boolean,
    player: Player,
    size?: "small" | "medium" | "large"
}

export interface StyledCardImageProps {
    size?: "small" | "medium" | "large"
}

export interface StyledCardFaceProps {
    revealed: Boolean
}