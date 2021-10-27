import { screen, waitFor } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import userEvent from '@testing-library/user-event'

import Radio from '.'

describe('<Radio />', () => {
  it('should render with label', () => {
    renderWithTheme(<Radio label="Radio label" labelFor="label" />)

    const input = screen.getByRole('radio')
    const label = screen.getByLabelText(/radio label/i)
    const labelText = screen.getByText(/radio label/i)

    expect(input).toBeInTheDocument()
    expect(label).toBeInTheDocument()
    expect(labelText).toBeInTheDocument()
  })

  it('should render without label', () => {
    renderWithTheme(<Radio />)

    expect(screen.queryByLabelText('Radio')).not.toBeInTheDocument()
  })

  it('should render with black label', () => {
    renderWithTheme(
      <Radio labelColor="black" label="Radio label" labelFor="Radio label" />
    )

    const labelText = screen.getByText(/radio label/i)

    expect(labelText).toHaveStyle({
      color: '#030517'
    })
  })

  it('should not trigger onCheck when event is not triggered', () => {
    const onCheck = jest.fn()

    renderWithTheme(<Radio label="radio" onCheck={onCheck} />)

    expect(onCheck).not.toHaveBeenCalled()
  })

  it('should call onCheck when user-event is triggered', async () => {
    const onCheck = jest.fn()

    renderWithTheme(<Radio label="radio" onCheck={onCheck} value="anyValue" />)

    userEvent.click(screen.getByRole('radio'))
    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1)
    })
    expect(onCheck).toHaveBeenCalledWith('anyValue')
  })

  it('should be accessible with tab', () => {
    renderWithTheme(<Radio label="Radio" labelFor="Radio" />)

    expect(document.body).toHaveFocus()

    userEvent.tab()

    expect(screen.getByLabelText(/Radio/i)).toHaveFocus()
  })
})
