import { render, screen } from '@testing-library/react';
import Application from './Application';

test('renders learn react link', () => {
  render(<Application />);
  
  const headerElement = screen.getByText(/Material Sandbox/i);
  expect(headerElement).toBeInTheDocument();
});
