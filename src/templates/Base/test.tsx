import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Base from '.'

jest.mock('components/Menu', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock menu"></div>
    }
  }
})

jest.mock('components/Footer', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock footer"></div>
    }
  }
})

describe('<Base />', () => {
  it('should render menu, footer and children', () => {
    renderWithTheme(
      <Base>
        <h1>Heading</h1>
      </Base>
    )

    const menu = screen.getByTestId('Mock menu')
    const footer = screen.getByTestId('Mock footer')
    const children = screen.getByRole('heading', { name: /heading/i })

    expect(menu).toBeInTheDocument()
    expect(footer).toBeInTheDocument()
    expect(children).toBeInTheDocument()
  })
})
