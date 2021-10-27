import styled, { css } from 'styled-components'
import { RadioProps } from '.'

export const Wrapper = styled.main`
  display: flex;
  align-items: center;
`

export const Input = styled.input`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    appearance: none;
    width: 1.8rem;
    height: 1.8rem;
    border: 0.2rem solid ${theme.colors.darkGray};
    border-radius: 50%;
    background: transparent;
    transition: background border ${theme.transition.fast};
    outline: none;

    &:focus {
      box-shadow: 0 0 0.5rem ${theme.colors.primary};
    }

    &:before {
      content: '';
      width: 0.8rem;
      height: 0.8rem;
      border-radius: 50%;
      background: ${theme.colors.primary};
      transition: opacity ${theme.transition.fast};
      opacity: 0;
      position: absolute;
    }

    &:checked {
      &:before {
        opacity: 1;
      }
    }
  `}
`

export const Label = styled.label<Pick<RadioProps, 'labelColor'>>`
  ${({ theme, labelColor }) => css`
    color: ${theme.colors[labelColor!]};
    cursor: pointer;
    padding-left: ${theme.spacings.xxsmall};
    line-height: 1;
  `}
`
