import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import GameItem from '.'

const props = {
  img: 'https://source.unsplash.com/user/willianjusten/151x70',
  title: 'Red Dead Redemption 2',
  price: 'R$ 215,00'
}

describe('<GameItem />', () => {
  it('should render the item', () => {
    renderWithTheme(<GameItem {...props} />)

    const title = screen.getByRole('heading', { name: props.title })
    const price = screen.getByText(props.price)
    const img = screen.getByRole('img', { name: props.title })

    expect(title).toBeInTheDocument()
    expect(price).toBeInTheDocument()
    expect(img).toHaveAttribute('src', props.img)
  })

  it('should render the item with download link', () => {
    const downloadLink = 'https://link'

    renderWithTheme(<GameItem {...props} downloadLink={downloadLink} />)

    expect(
      screen.getByRole('link', { name: `Get ${props.title} here` })
    ).toHaveAttribute('href', downloadLink)
  })
})
