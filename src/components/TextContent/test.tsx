import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import TextContent from '.'

const props = {
  title: 'Description',
  content: `<h1>Content</h1>`
}

describe('<TextContent />', () => {
  it('should render the title and content', () => {
    renderWithTheme(<TextContent {...props} />)

    const description = screen.getByRole('heading', { name: /description/i })
    const content = screen.getByRole('heading', { name: /content/i })

    expect(description).toBeInTheDocument()
    expect(content).toBeInTheDocument()
  })

  it('should render without title', () => {
    renderWithTheme(<TextContent content={props.content} />)

    const description = screen.queryByRole('heading', { name: /description/i })

    expect(description).not.toBeInTheDocument()
  })

  it('should render the title and content', () => {
    renderWithTheme(<TextContent {...props} />)

    const wrapper = screen.getByRole('heading', {
      name: /description/i
    }).parentElement

    expect(wrapper).toHaveStyle({
      color: '#FAFAFA'
    })

    expect(wrapper).toHaveStyleRule('color', '#030517', {
      media: '(min-width: 768px)'
    })
  })
})
