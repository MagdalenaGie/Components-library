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
    player: Player
}

export interface StyledCardFaceProps {
    revealed: Boolean
}