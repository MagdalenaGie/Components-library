import React from 'react';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';

import * as stories from './Loader.stories';

const { LoaderExample } = composeStories(stories);

test('renders loader', () => {
  render(<LoaderExample />);
  
  expect(screen.getByTestId("loader")).not.toBeNull();
});