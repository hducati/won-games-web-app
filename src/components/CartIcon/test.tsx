import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import CartIcon from '.'

describe('<CartIcon />', () => {
  it('should render without badge', () => {
    renderWithTheme(<CartIcon />)

    expect(screen.getByLabelText(/shopping cart/i)).toBeInTheDocument()
    expect(screen.queryByLabelText(/cart items/i)).not.toBeInTheDocument()
  })

  it('should render with badge', () => {
    const quantity = 12

    renderWithTheme(<CartIcon quantity={quantity} />)

    expect(screen.getByLabelText(/cart items/i)).toBeInTheDocument()
    expect(screen.getByText(quantity)).toBeInTheDocument()
  })

  it('should render badge only if it has positive numbers', () => {
    const quantity = -1

    renderWithTheme(<CartIcon quantity={quantity} />)

    expect(screen.queryByLabelText(/cart items/i)).not.toBeInTheDocument()
    expect(screen.queryByText(quantity)).not.toBeInTheDocument()
  })
})
