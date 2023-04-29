import { Player } from "../cards/PlayerCard/PlayerCard.types";

export interface UserInfoProps {
    player: Player
    size?: "small" | "medium" | "large",
}

export interface UserInfoElementsProps {
    size?: "small" | "medium" | "large",
}

export interface UserCharacter {
    avatarId: number,
    characterName: string,
    characterImage: string,
}
