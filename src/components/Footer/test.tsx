import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Footer from '.'

describe('<Footer />', () => {
  it('should be able to render all columns', () => {
    renderWithTheme(<Footer />)

    expect(screen.getByText(/contact us/i)).toBeInTheDocument()
    expect(screen.getByText(/follow us/i)).toBeInTheDocument()
    expect(screen.getByText(/links/i)).toBeInTheDocument()
    expect(screen.getByText(/location/i)).toBeInTheDocument()
  })
})
