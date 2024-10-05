import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SimpleButton from '../SimpleButton';

// Test for rendering the button
test('renders the button', () => {
  render(<SimpleButton />);

  // Check if the button is rendered
  const buttonElement = screen.getByRole('button');
  expect(buttonElement).toBeInTheDocument();
  // console.log(`buttonElement.textContent: ${buttonElement.textContent}`);
  expect(buttonElement.textContent).toBe('Click me');

  // try {
  //   expect(buttonElement).toHaveTextContent('Click me');
  // } catch (error) {
  //   console.error('Assertion failed:', error);
  // }
});

// Test for handling the click event
test('handles click and updates text', async () => {
  render(<SimpleButton />);

  const buttonElement = screen.getByRole('button');

  // Simulate a click event
  userEvent.click(buttonElement);

  // Use waitFor to check the updated text after the state change
  await waitFor(() => {
    // console.log(`buttonElement.textContent: ${buttonElement.textContent}`);
    expect(buttonElement.textContent).toBe('Clicked');
  });
});
