import { fireEvent, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import GameCard from '.'

const props = {
  slug: 'population-zero',
  title: 'Population Zero',
  developer: 'Rockstar Games',
  img: 'https://source.unsplash.com/user/willianjusten/300x140',
  price: 235
}

describe('<GameCard />', () => {
  it('should render correctly', () => {
    renderWithTheme(<GameCard {...props} />)

    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: props.developer })
    ).toBeInTheDocument()
    expect(screen.getByRole('img', { name: props.title })).toBeInTheDocument()
    expect(screen.getByText(props.price)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: props.title })).toHaveAttribute(
      'href',
      `/game/${props.slug}`
    )
  })

  it('should render default price', () => {
    renderWithTheme(<GameCard {...props} />)

    const price = screen.getByText(props.price)

    expect(price).toHaveStyleRule('background-color', '#3CD3C1')
    expect(price).not.toHaveStyleRule('text-decoration', 'line-through')
  })

  it('should render a line-through in price when promotional', () => {
    const promotionalPrice = 15
    renderWithTheme(<GameCard {...props} promotionalPrice={promotionalPrice} />)

    const priceText = screen.getByText(props.price)
    const promotionalPriceText = screen.getByText(promotionalPrice)

    expect(priceText).toHaveStyleRule('text-decoration', 'line-through')
    expect(promotionalPriceText).not.toHaveStyleRule(
      'text-decoration',
      'line-through'
    )
  })

  it('should render a filled Favorite icon when favorite is true', () => {
    renderWithTheme(<GameCard {...props} favorite />)

    expect(screen.getByLabelText(/remove from wishlist/i)).toBeInTheDocument()
  })

  it('should call onFav method when favorite is clicked', () => {
    const onFav = jest.fn()
    renderWithTheme(<GameCard {...props} favorite onFav={onFav} />)

    fireEvent.click(screen.getAllByRole('button')[0])

    expect(onFav).toBeCalled()
  })

  it('should be able to render Ribbon', () => {
    renderWithTheme(
      <GameCard
        {...props}
        ribbon="my ribbon"
        ribbonSize="small"
        ribbonColor="secondary"
      />
    )

    const ribbon = screen.getByText(/my ribbon/i)

    expect(ribbon).toBeInTheDocument()
    expect(ribbon).toHaveStyle({ backgroundColor: '#3CD3C1' })
    expect(ribbon).toHaveStyle({ height: '2.6rem', fontSize: '1.2rem' })
  })
})
