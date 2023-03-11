import { Player } from "../cards/PlayerCard/PlayerCard.types";

export interface UserInfoProps {
    player: Player
}

export interface UserCharacter {
    avatarId: number,
    characterName: string,
    characterImage: string,
}

export enum AvatarPrefixes {
    face1 = "Wise Cat",
    face2 = "Admiral"
}