import React from 'react';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';

import * as stories from './UserInfo.stories';

const { UserInfoExample } = composeStories(stories);

test('renders user info with correct data', () => {
  render(<UserInfoExample />);
  
  expect(screen.getByText(/Adam/i)).not.toBeNull();

  let img = screen.getByAltText(/User avatar/i);
  expect(img).not.toBeNull();
  expect(img).toHaveAttribute('src', 'face1.png');
});