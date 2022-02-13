import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithTheme } from 'utils/tests/helpers'

import Dropdown from '.'

const title = <h1 aria-label="toggle dropdown">title</h1>

describe('<Dropdown />', () => {
  it('should start with dropdown closed', () => {
    renderWithTheme(
      <Dropdown title={title}>
        <span>content</span>
      </Dropdown>
    )

    expect(screen.queryByText(/toggle dropdown/i)).not.toBeInTheDocument()
  })

  it('should render the title', () => {
    renderWithTheme(
      <Dropdown title={title}>
        <span>content</span>
      </Dropdown>
    )

    expect(screen.getByLabelText(/toggle dropdown/)).toBeInTheDocument()
  })

  it('should open dropdown', () => {
    renderWithTheme(
      <Dropdown title={title}>
        <span>content</span>
      </Dropdown>
    )

    const content = screen.getByText(/content/).parentElement

    expect(content).toHaveStyle({ opacity: 0 })
    expect(content?.getAttribute('aria-hidden')).toBe('true')

    userEvent.click(screen.getByLabelText(/toggle dropdown/))

    expect(content).toHaveStyle({ opacity: 1 })
    expect(content?.getAttribute('aria-hidden')).toBe('false')
  })
})
