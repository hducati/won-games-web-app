import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import GameInfo from '.'

const props = {
  title: 'My game title',
  description: 'My game description',
  price: 210
}

describe('<GameInfo />', () => {
  it('should render game data', () => {
    const { container } = renderWithTheme(<GameInfo {...props} />)

    const title = screen.getByRole('heading', { name: props.title })
    const description = screen.getByText(props.description)
    const price = screen.getByText(/\$210\.00/)

    expect(title).toBeInTheDocument()
    expect(description).toBeInTheDocument()
    expect(price).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render buttons', () => {
    renderWithTheme(<GameInfo {...props} />)

    const addToCartButton = screen.getByRole('button', { name: /add to cart/i })
    const wishlistButton = screen.getByRole('button', { name: /wishlist/i })

    expect(addToCartButton).toBeInTheDocument()
    expect(wishlistButton).toBeInTheDocument()
  })
})
