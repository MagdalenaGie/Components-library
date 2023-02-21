import React from 'react';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';

// import Button stories file as a module
import * as stories from './Button.stories';

// Every component that is returned maps 1:1 with the stories, but they already contain all decorators from story level, meta level and global level!
const { RaspberryButton } = composeStories(stories);

test('renders button with selected style', () => {
  render(<RaspberryButton />);
  
  let button = screen.getByText(/Rasp button/i);
  expect(button).not.toBeNull();
  const style = window.getComputedStyle(button);
  expect(style.color).toBe('rgb(247, 34, 103)')
  expect(style.fontFamily).toBe("Montserrat")
});

// test('onclick handler is not called when disabled', () => {
//   const onClickSpy = jest.fn();
//   // you can also pass custom props, which override the ones coming from the story args
//   render(<Disabled onClick={onClickSpy} />);
//   screen.getByRole('button').click();
//   expect(onClickSpy).not.toHaveBeenCalled();
// });