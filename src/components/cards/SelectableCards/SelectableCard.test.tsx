import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';

import * as stories from './SelectableCard.stories';

const { Card } = composeStories(stories);

test('renders selected revealed card with correct data', async () => {
    render(<Card />);

    let cardImg = screen.getByAltText(/cardImage/i);
    // eslint-disable-next-line testing-library/no-node-access
    let cardBtn = cardImg.parentElement;
    expect(cardBtn).not.toBeNull();
    expect(cardBtn).toHaveAttribute('value', '3');

    expect(cardImg).not.toBeNull();
    expect(cardImg).toHaveAttribute('src', 'card3.png');
});