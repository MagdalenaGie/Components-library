import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';

import * as stories from './CardsToSelect.stories';

const { CardsToSelectExample } = composeStories(stories);

test('renders selected revealed card with correct data', async () => {
    render(<CardsToSelectExample />);

    let cardsListContainer = screen.getByTestId(/cardsList/i);
    expect(cardsListContainer).not.toBeNull();
    // eslint-disable-next-line testing-library/no-node-access
    let cardsOnList = cardsListContainer.children;
    expect(cardsOnList).toHaveLength(11);

    const fibonacci = [0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89];

    Array.from(cardsOnList).forEach((card, index) => {
        expect(card).toHaveAttribute('value', fibonacci[index].toString());
    })
});