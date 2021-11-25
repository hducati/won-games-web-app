import { render, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import GameDetails, { GameDetailsProps } from '.'

const props: GameDetailsProps = {
  developer: 'Different Tales',
  platforms: ['windows', 'mac', 'linux'],
  releaseDate: '2020-11-21T23:00:00'
}

describe('<GameDetails />', () => {
  it('should render the blocks', () => {
    renderWithTheme(<GameDetails {...props} />)

    const developer = screen.getByRole('heading', { name: /developer/i })
    const releaseDate = screen.getByRole('heading', { name: /release date/i })
    const platforms = screen.getByRole('heading', { name: /platforms/i })
    const publisher = screen.getByRole('heading', { name: /publisher/i })
    const rating = screen.getByRole('heading', { name: /rating/i })
    const genres = screen.getByRole('heading', { name: /genres/i })

    expect(developer).toBeInTheDocument()
    expect(releaseDate).toBeInTheDocument()
    expect(platforms).toBeInTheDocument()
    expect(publisher).toBeInTheDocument()
    expect(rating).toBeInTheDocument()
    expect(genres).toBeInTheDocument()
  })

  it('should render platform icons', () => {
    renderWithTheme(<GameDetails {...props} />)

    const windows = screen.getByRole('img', { name: /windows/i })
    const linux = screen.getByRole('img', { name: /linux/i })
    const mac = screen.getByRole('img', { name: /mac/i })

    expect(windows).toBeInTheDocument()
    expect(linux).toBeInTheDocument()
    expect(mac).toBeInTheDocument()
  })

  it('should render the formated date', () => {
    renderWithTheme(<GameDetails {...props} />)

    const date = screen.getByText('Nov 21, 2020')

    expect(date).toBeInTheDocument()
  })
})
