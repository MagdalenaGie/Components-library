import React from 'react';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';

import * as stories from './Input.stories';

const { InputName } = composeStories(stories);

test('renders input with correct label', () => {
  render(<InputName />);
  
  expect(screen.getByText(/Your name/i)).not.toBeNull();
});