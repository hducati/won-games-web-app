import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Empty from '.'

const props = {
  title: 'A simple title',
  description: 'A simple description'
}

describe('<Empty />', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(<Empty {...props} hasLink />)

    const title = screen.getByRole('heading', { name: props.title })
    const description = screen.getByText(props.description)
    const image = screen.getByRole('image', {
      name: /a gamer in a couch playing video game/i
    })
    const link = screen.getByRole('link', { name: /go back to store/i })

    expect(image).toBeInTheDocument()
    expect(title).toBeInTheDocument()
    expect(description).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '/')

    expect(container).toMatchSnapshot()
  })

  it('should not render Link when not provided', () => {
    renderWithTheme(<Empty {...props} />)

    const link = screen.queryByRole('link', { name: /go back to store/i })

    expect(link).not.toBeInTheDocument()
  })
})
