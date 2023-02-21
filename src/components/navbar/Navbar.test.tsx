import React from 'react';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';

import * as stories from './Navbar.stories';

const { BrandedNavbar, BrandedNavbarInGame } = composeStories(stories);

test('renders navbar without user info', () => {
  render(<BrandedNavbar />);
  
  expect(screen.getByText(/Planning poker/i)).not.toBeNull();
  expect(screen.queryByText(/In room: Galactic voting/i)).toBeNull();
  expect(screen.queryByAltText(/User avatar/i)).toBeNull();
});

test('renders navbar with user info', () => {
    render(<BrandedNavbarInGame />);
    
    expect(screen.getByText(/Planning poker/i)).not.toBeNull();
    expect(screen.getByText(/In room:/i)).not.toBeNull();
    expect(screen.getByText(/Galactic voting/i)).not.toBeNull();
    expect(screen.getByText(/Adam/i)).not.toBeNull();
  
    let img = screen.getByAltText(/User avatar/i);
    expect(img).not.toBeNull();
    expect(img).toHaveAttribute('src', 'face1.png');
  });