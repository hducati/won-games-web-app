import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import cards from './mock'

import PaymentOptions from '.'
import userEvent from '@testing-library/user-event'

describe('<PaymentOptions />', () => {
  it('should render the saved card options and the add new card button', () => {
    renderWithTheme(<PaymentOptions cards={cards} handlePayment={jest.fn()} />)

    expect(screen.getByText(/4325/)).toBeInTheDocument()
    expect(screen.getByText(/4326/)).toBeInTheDocument()
    expect(screen.getByText(/add a new credit card/i)).toBeInTheDocument()
  })

  it('should not call handlePayment when button is disabled', async () => {
    const handlePayment = jest.fn()
    renderWithTheme(
      <PaymentOptions cards={cards} handlePayment={handlePayment} />
    )

    userEvent.click(screen.getByRole('button', { name: /buy now/i }))

    expect(handlePayment).not.toHaveBeenCalled()
  })
})
