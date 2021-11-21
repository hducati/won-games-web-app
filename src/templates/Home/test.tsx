import 'match-media-mock'
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import bannersMock from 'components/BannerSlider/mock'
import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'

import Home from '.'

jest.mock('components/Showcase', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock showcase"></div>
    }
  }
})

jest.mock('components/BannerSlider', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock banner slider"></div>
    }
  }
})

const props = {
  banners: bannersMock,
  newGames: [gamesMock[0]],
  mostPopularGames: [gamesMock[0]],
  mostPopularHighlight: highlightMock,
  upComingGames: [gamesMock[0]],
  upComingHighlight: highlightMock,
  upComingMoreGames: [gamesMock[0]],
  freeGames: [gamesMock[0]],
  freeHighlight: highlightMock
}

describe('<Home />', () => {
  it('should render banner and showcases', () => {
    renderWithTheme(<Home {...props} />)

    const showCase = screen.getAllByTestId('Mock showcase')
    const bannerSlider = screen.getByTestId('Mock banner slider')

    expect(bannerSlider).toBeInTheDocument()
    expect(showCase).toHaveLength(5)
  })
})
