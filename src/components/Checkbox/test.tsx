import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Checkbox from '.'

describe('<Checkbox />', () => {
  it('should render with label', () => {
    renderWithTheme(<Checkbox label="checkbox label" labelFor="check" />)

    const input = screen.getByRole('checkbox')
    const label = screen.getByLabelText(/checkbox label/i)
    const labelText = screen.getByText(/checkbox label/i)

    expect(input).toBeInTheDocument()
    expect(label).toBeInTheDocument()
    expect(labelText).toHaveAttribute('for', 'check')
  })

  it('should render without label', () => {
    renderWithTheme(<Checkbox />)

    expect(screen.queryByLabelText('Checkbox')).not.toBeInTheDocument()
  })

  it('should render with black label', () => {
    renderWithTheme(
      <Checkbox label="checkbox label" labelFor="check" labelColor="black" />
    )

    const labelText = screen.getByText(/checkbox label/i)

    expect(labelText).toHaveStyle({ color: '#030517' })
  })
})
