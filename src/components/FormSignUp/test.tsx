import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import FormSignUp from '.'

describe('<FormSignUp />', () => {
  it('should render the form', () => {
    renderWithTheme(<FormSignUp />)

    const name = screen.getByPlaceholderText(/name/i)
    const email = screen.getByPlaceholderText(/email/i)
    const password = screen.getByPlaceholderText('Password')
    const passwordConfirmation =
      screen.getByPlaceholderText(/confirm password/i)
    const button = screen.getByRole('button', { name: /sign up now/i })

    expect(name).toBeInTheDocument()
    expect(email).toBeInTheDocument()
    expect(password).toBeInTheDocument()
    expect(passwordConfirmation).toBeInTheDocument()
    expect(button).toBeInTheDocument()
  })

  it('should render the text to sign in', () => {
    renderWithTheme(<FormSignUp />)

    const signInText = screen.getByText('Already have an account?')
    const signInLink = screen.getByRole('link', { name: /sign in/i })

    expect(signInText).toBeInTheDocument()
    expect(signInLink).toBeInTheDocument()
  })
})
