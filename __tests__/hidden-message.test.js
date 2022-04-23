import '@testing-library/jest-dom'

import { render, fireEvent, screen } from '@testing-library/react'
import HiddenMessage from '../src/components/HiddenMessage'

test('shows the children when the checkbox is checked', () => {
  const testMessage = '<div>Test Message</div>'
  render(<HiddenMessage>{testMessage}</HiddenMessage>)

  expect(screen.queryByText(testMessage)).toBeNull()
  const input = screen.getByLabelText(/show/i)
  fireEvent.click(input)

  expect(screen.getByText(testMessage)).toBeInTheDocument()
})