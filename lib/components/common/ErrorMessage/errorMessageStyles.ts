import styled, { css } from 'styled-components'
import { ThemeProps } from '@types'

export const SErrorMessage = styled.span<{ $theme: ThemeProps }>`
  ${({ $theme: { colors } }) => css`
    color: ${colors.secondary.error};
    font-size: 12px;
    margin: 0 12px;
  `};
`
