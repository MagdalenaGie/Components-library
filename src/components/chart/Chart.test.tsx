import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';

import * as stories from './Chart.stories';

const { ResultChart, ResultBiggerChart, ResultSmallerChart } = composeStories(stories);

test('renders chart with correct data', async () => {
    render(<ResultChart />);

    expect(screen.getByText(/Voting result:/i)).not.toBeNull();
    expect(screen.getByRole("VotingResultValue")).not.toBeNull();
    expect(screen.getByRole("VotingResultValue")).toHaveTextContent("3.1");

    let barsList = await screen.findAllByRole('grephBar')
    expect(barsList).not.toBeNull();
    expect(barsList).toHaveLength(4);
});

test('renders bigger chart with correct data', async () => {
    render(<ResultBiggerChart />);

    expect(screen.getByText(/Voting result:/i)).not.toBeNull();
    expect(screen.getByRole("VotingResultValue")).not.toBeNull();
    expect(screen.getByRole("VotingResultValue")).toHaveTextContent("15.7");

    let barsList = await screen.findAllByRole('grephBar')
    expect(barsList).not.toBeNull();
    expect(barsList).toHaveLength(5);
});

test('renders smaller chart with correct data', async () => {
    render(<ResultSmallerChart />);

    expect(screen.getByText(/Voting result:/i)).not.toBeNull();
    expect(screen.getByRole("VotingResultValue")).not.toBeNull();
    expect(screen.getByRole("VotingResultValue")).toHaveTextContent("3.8");

    let barsList = await screen.findAllByRole('grephBar')
    expect(barsList).not.toBeNull();
    expect(barsList).toHaveLength(4);
});