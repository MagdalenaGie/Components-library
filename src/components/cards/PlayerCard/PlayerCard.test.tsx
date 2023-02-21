import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';

import * as stories from './PlayerCard.stories';

const { SelectedRenamedCard, SpectatorCard, WaitingToSelectCard, SelectedCard} = composeStories(stories);

test('renders selected revealed card with correct data', async () => {
    render(<SelectedRenamedCard />);

    expect(screen.getByText(/Adam/i)).not.toBeNull();

    let avatarImg = screen.getByAltText(/User avatar/i);
    expect(avatarImg).not.toBeNull();
    expect(avatarImg).toHaveAttribute('src', 'face1.png');

    let cardImg = screen.getByAltText(/cardImage/i);
    expect(cardImg).not.toBeNull();
    expect(cardImg).toHaveAttribute('src', 'card3.png');
});

test('renders spectator card with correct data', async () => {
    render(<SpectatorCard />);

    expect(screen.getByText(/Adam/i)).not.toBeNull();

    let avatarImg = screen.getByAltText(/User avatar/i);
    expect(avatarImg).not.toBeNull();
    expect(avatarImg).toHaveAttribute('src', 'face1.png');

    let cardImg = screen.getByAltText(/cardSpectator/i);
    expect(cardImg).not.toBeNull();
    expect(cardImg).toHaveAttribute('src', 'cardback.png');
});

test('renders waiting to select card with correct data', async () => {
    render(<WaitingToSelectCard />);

    expect(screen.getByText(/Adam/i)).not.toBeNull();

    let avatarImg = screen.getByAltText(/User avatar/i);
    expect(avatarImg).not.toBeNull();
    expect(avatarImg).toHaveAttribute('src', 'face1.png');

    let cardImg = screen.getByAltText(/cardBack/i);
    expect(cardImg).not.toBeNull();
    expect(cardImg).toHaveAttribute('src', 'cardwait.png');
});

test('renders selected but not revealed to select card with correct data', async () => {
    render(<SelectedCard />);

    expect(screen.getByText(/Adam/i)).not.toBeNull();

    let avatarImg = screen.getByAltText(/User avatar/i);
    expect(avatarImg).not.toBeNull();
    expect(avatarImg).toHaveAttribute('src', 'face1.png');

    let cardImg = screen.getByAltText(/cardBack/i);
    expect(cardImg).not.toBeNull();
    expect(cardImg).toHaveAttribute('src', 'cardback.png');
});