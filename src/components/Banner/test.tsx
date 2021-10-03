import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Banner from '.'

const renderComponent = () => {
  const bannerObject = {
    img: 'https://source.unsplash.com/user/willianjusten/1042x580',
    title: 'Defy death',
    subtitle: '<p>Play the new <strong>CrashLands</strong> season',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death'
  }

  renderWithTheme(<Banner {...bannerObject} />)
}

describe('<Banner />', () => {
  beforeEach(() => {
    renderComponent()
  })

  it('should render correctly', () => {
    expect(
      screen.getByRole('heading', { name: /defy death/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /play the new crashlands/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /defy death/i })).toHaveAttribute(
      'src',
      'https://source.unsplash.com/user/willianjusten/1042x580'
    )
  })
})
