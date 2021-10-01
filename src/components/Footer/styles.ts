import styled, { css } from 'styled-components'

import * as HeadingStyles from 'components/Heading/styles'
import media from 'styled-media-query'

export const Wrapper = styled.footer`
  ${HeadingStyles.Wrapper} {
    text-transform: uppercase;
  }
`

export const Content = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: ${theme.grid.gutter};
    margin-top: ${theme.spacings.medium};

    ${media.greaterThan('medium')`
      grid-template-columns: repeat(4, 1fr)
    `}
  `}
`

export const Column = styled.div`
  ${({ theme }) => css`
    a,
    span {
      display: flex;
      color: ${theme.colors.gray};
      text-decoration: none;
      margin-bottom: ${theme.spacings.xxsmall};
      font-size: ${theme.font.sizes.small};
    }
    a:hover {
      text-decoration: underline;
    }
  `}
`

export const Copyright = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    margin-top: ${theme.spacings.large};
    margin-bottom: ${theme.spacings.medium};
    font-size: ${theme.font.sizes.xsmall};
    text-align: center;
  `}
`
