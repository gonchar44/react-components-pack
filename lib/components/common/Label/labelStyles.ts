import styled, { css } from 'styled-components'
import { ThemeProps } from '@types'

export const SLabel = styled.label<{
  $isError: boolean | undefined
  $theme: ThemeProps
}>`
  ${({ $isError, $theme: { colors } }) => css`
    color: ${colors.primary.dark};
    font-size: 15px;
    font-weight: bold;
    margin-left: 12px;

    ${$isError &&
    css`
      color: ${colors.secondary.error};
    `};
  `};
`
