import '@testing-library/jest-dom';
import { render, fireEvent, screen, getByRole } from '@testing-library/react';
import Button from "../src/components/Button";

test('shows text after div clicked', () => {
  render(<Button />);
  expect(screen.queryByText('True State')).toBeNull();
  const input = screen.getByRole('button');
  fireEvent.click(input);

  expect(screen.getByText('True State')).toBeInTheDocument()
})