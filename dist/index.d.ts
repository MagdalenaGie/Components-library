/// <reference types="react" />
import React$1, { MouseEventHandler, ChangeEventHandler, FC } from 'react';

declare const Loader: () => JSX.Element;

interface ButtonProps {
    label?: string;
    styleType?: "yellow" | "orange" | "raspberry" | "yellow" | "turquise";
    disabled?: boolean;
    size?: "small" | "medium" | "large";
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

declare const Button: React$1.FC<ButtonProps>;

interface ChartProps {
    votes: Array<number>;
}

declare const Chart: React$1.FC<ChartProps>;

declare const FontStyles: React.FC;

interface InputProps {
    id?: string;
    label?: string;
    error?: boolean;
    message?: string;
    success?: boolean;
    disabled?: boolean;
    onChange?: ChangeEventHandler<HTMLInputElement>;
}

declare const Input: FC<InputProps>;

interface Player {
    guid: string;
    name: string;
    isSpectator: boolean;
    avatarId: number;
}
interface PlayerCardProps {
    value?: number;
    selected: boolean;
    revealed: boolean;
    player: Player;
}

interface NavbarProps {
    player: Player | null;
    inGame: boolean;
    gameName: string;
    gameGuid: string;
}

declare const Navbar: FC<NavbarProps>;

interface UserInfoProps {
    player: Player;
}

declare const UserInfo: React$1.FC<UserInfoProps>;

interface SelectableCardProps {
    value: number;
    selected: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

declare const SelectableCard: React$1.FC<SelectableCardProps>;

declare const PlayerCard: React$1.FC<PlayerCardProps>;

interface CardsToSelectProps {
}

declare const CardsToSelect: React$1.FC<CardsToSelectProps>;

export { Button, CardsToSelect, Chart, FontStyles, Input, Loader, Navbar, PlayerCard, SelectableCard, UserInfo };
