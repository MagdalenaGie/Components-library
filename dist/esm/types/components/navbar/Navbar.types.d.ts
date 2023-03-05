import { Player } from "../cards/PlayerCard/PlayerCard.types";
export interface NavbarProps {
    player: Player | null;
    inGame: boolean;
    gameName: string;
    gameGuid: string;
}
