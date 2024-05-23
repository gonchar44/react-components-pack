import styled, { css } from 'styled-components'
import { ThemeProps } from '@types'

export const SWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 5px;
`

export const SAreaWrapper = styled.div`
  width: 100%;
  position: relative;
`

export const STextarea = styled.textarea<{
  $max?: number
  $isResize?: boolean
  $isError: boolean
  $theme: ThemeProps
}>`
  ${({ $max, $isResize, $isError, $theme: { colors } }) => css`
    width: 100%;
    border: 2px solid ${colors.primary.dark};
    border-radius: 10px;
    color: ${colors.primary.dark};
    padding: 10px 15px;
    outline: none;
    resize: vertical;

    ${!$isResize &&
    css`
      resize: none;
    `};

    ${$max &&
    css`
      padding-top: 22px;
    `};

    ${$isError &&
    css`
      border-color: ${colors.secondary.error};
      color: ${colors.secondary.error};
      &::placeholder {
        color: ${colors.secondary.error};
      }
    `};
  `};
`

export const SLimitLabel = styled.span<{
  $isError: boolean
  $theme: ThemeProps
}>`
  ${({ $isError, $theme: { colors } }) => css`
    color: ${colors.primary.dark};
    font-size: 12px;
    position: absolute;
    top: 8px;
    right: 10px;

    ${$isError &&
    css`
      color: ${colors.secondary.error};
    `};
  `};
`
