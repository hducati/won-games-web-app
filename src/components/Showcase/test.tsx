import 'match-media-mock'
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import item from 'components/Highlight/mock'

import Showcase from '.'
import items from 'components/GameCardSlider/mock'

describe('<Showcase />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Showcase title="fake heading" />)

    const title = screen.getByRole('heading', { name: /fake heading/i })

    expect(title).toBeInTheDocument()
  })

  it('should not render the heading', () => {
    renderWithTheme(<Showcase />)

    const title = screen.queryByRole('heading', { name: /fake heading/i })

    expect(title).not.toBeInTheDocument()
  })

  it('should render the highlight', () => {
    renderWithTheme(<Showcase highlight={item} />)

    const highlight = screen.getByRole('heading', { name: item.title })

    expect(highlight).toBeInTheDocument()
  })

  it('should render the games section', () => {
    renderWithTheme(<Showcase games={items} />)

    const games = screen.getByRole('heading', { name: items[0].title })

    expect(games).toBeInTheDocument()
  })
})
