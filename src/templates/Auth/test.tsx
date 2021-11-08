import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Auth from '.'

describe('<Auth />', () => {
  it('should render components and children', () => {
    renderWithTheme(
      <Auth title="title">
        <input type="text" />
      </Auth>
    )

    const logos = screen.getAllByRole('img')
    const heading = screen.getByRole('heading', {
      name: /All your favorite games in one place/i
    })
    const subtitle = screen.getByRole('heading', {
      name: /WON is the best and most complete gaming platform/i
    })
    const children = screen.getByRole('textbox')
    const contentTitle = screen.getByRole('heading', { name: /title/i })

    expect(logos[0]).toBeInTheDocument()
    expect(logos[1]).toBeInTheDocument()
    expect(heading).toBeInTheDocument()
    expect(subtitle).toBeInTheDocument()
    expect(children).toBeInTheDocument()
    expect(contentTitle).toBeInTheDocument()
  })
})
