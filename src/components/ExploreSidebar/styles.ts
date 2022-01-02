import styled, { css } from 'styled-components'
import * as CheckboxStyles from 'components/Checkbox/styles'
import * as RadioStyles from 'components/Radio/styles'
import * as HeadingStyles from 'components/Heading/styles'
import * as ButtonStyles from 'components/Button/styles'

type FilterFullProps = {
  isOpen: boolean
}

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    position: relative;
    align-items: center;

    ${CheckboxStyles.Wrapper},
    ${RadioStyles.Wrapper} {
      margin-bottom: ${theme.spacings.xxsmall};
    }

    ${HeadingStyles.Wrapper} {
      margin-top: ${theme.spacings.xsmall};
    }
  `}
`

export const IconWrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    cursor: pointer;
    width: 2.4rem;
    height: 2.4rem;
  `}
`

export const InputWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
  `}
`

export const ExploreBox = styled.div``

export const FilterFull = styled.div<FilterFullProps>`
  ${({ theme, isOpen }) => css`
    display: flex;
    flex-direction: column;
    position: absolute;
    justify-content: space-between;
    background: ${theme.colors.white};
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100vh;
    overflow: hidden;
    opacity: ${isOpen ? 1 : 0};
    pointer-events: ${isOpen ? 'all' : 'none'};
    transition: ${theme.transition.default};
    padding: ${theme.spacings.small} ${theme.spacings.xsmall};

    > svg {
      position: absolute;
      cursor: pointer;
      width: 2.4rem;
      height: 2.4rem;
      top: 0;
      right: 0;
      margin: ${theme.spacings.xsmall};
      color: ${theme.colors.black};
    }

    ${ExploreBox} {
      transform: ${isOpen ? 'translateY(0)' : 'translateY(3rem)'};
      transition: ${theme.transition.default};
    }

    > button {
      display: block;
    }
  `}
`
