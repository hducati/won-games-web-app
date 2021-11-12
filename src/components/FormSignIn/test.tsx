import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import FormSignIn from '.'

describe('<FormSignIn />', () => {
  it('should render the form', () => {
    renderWithTheme(<FormSignIn />)

    const emailInput = screen.getByPlaceholderText(/email/i)
    const passwordInput = screen.getByPlaceholderText(/password/i)
    const button = screen.getByRole('button', { name: /sign in now/i })

    expect(emailInput).toBeInTheDocument()
    expect(passwordInput).toBeInTheDocument()
    expect(button).toBeInTheDocument()
  })

  it('should render the forgot password link', () => {
    renderWithTheme(<FormSignIn />)

    const forgotPasswordLink = screen.getByRole('link', {
      name: /forgot your password?/i
    })

    expect(forgotPasswordLink).toBeInTheDocument()
  })

  it('should render the text to sign up', () => {
    renderWithTheme(<FormSignIn />)

    const signUpText = screen.getByText('Dont have an an account?')
    const signUpLink = screen.getByRole('link', { name: /sign up/i })

    expect(signUpText).toBeInTheDocument()
    expect(signUpLink).toBeInTheDocument()
  })
})
