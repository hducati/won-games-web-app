import { screen, waitFor } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'
import userEvent from '@testing-library/user-event'

import TextField from '.'

describe('<TextField />', () => {
  it('should render with label', () => {
    renderWithTheme(<TextField label="Label" id="Field" labelFor="Field" />)

    const label = screen.getByLabelText(/Label/i)

    expect(label).toBeInTheDocument()
  })

  it('should render without label', () => {
    renderWithTheme(<TextField />)

    expect(screen.queryByLabelText(/label/i)).not.toBeInTheDocument()
  })

  it('should render with placeholder', () => {
    renderWithTheme(<TextField placeholder="placeholder" />)

    expect(screen.getByPlaceholderText(/placeholder/i))
  })

  it('should change its type when typing', async () => {
    const onInput = jest.fn()
    renderWithTheme(
      <TextField label="Label" id="Field" labelFor="Field" onInput={onInput} />
    )

    const input = screen.getByRole('textbox')
    const text = 'new text'

    userEvent.type(input, text)

    await waitFor(() => {
      expect(input).toHaveValue(text)
      expect(onInput).toHaveBeenCalledTimes(text.length)
    })

    expect(onInput).toHaveBeenCalledWith(text)
  })

  it('should be accessible', () => {
    renderWithTheme(
      <TextField label="TextField" labelFor="TextField" id="TextField" />
    )

    const input = screen.getByLabelText('TextField')
    expect(document.body).toHaveFocus()

    userEvent.tab()
    expect(input).toHaveFocus()
  })

  it('should render with icon', () => {
    renderWithTheme(
      <TextField
        label="TextField"
        labelFor="TextField"
        id="TextField"
        icon={<AddShoppingCart data-testid="icon" />}
      />
    )

    const icon = screen.getByTestId('icon')

    expect(icon).toBeInTheDocument()
  })

  it('should render an Icon on the right side', () => {
    renderWithTheme(
      <TextField
        icon={<AddShoppingCart data-testid="icon" />}
        iconPosition="right"
      />
    )

    expect(screen.getByTestId('icon').parentElement).toHaveStyle({ order: 1 })
  })

  it('should disable input correctly', async () => {
    renderWithTheme(
      <TextField
        label="TextField"
        labelFor="TextField"
        id="TextField"
        disabled
      />
    )

    const textField = screen.getByRole(/textbox/i)
    const text = 'new text'

    userEvent.type(textField, text)

    await waitFor(() => {
      expect(textField).not.toHaveValue(text)
    })

    expect(textField).toBeDisabled()
  })
})
