import styled, { css } from 'styled-components'
import { ThemeProps } from '@types'

export const SWrapper = styled.div<{ $isWrapperGap: boolean }>`
  ${({ $isWrapperGap }) => css`
    width: 100%;
    display: flex;
    flex-direction: column;

    ${$isWrapperGap &&
    css`
      row-gap: 5px;
    `};
  `};
`

export const SInputWrapper = styled.div`
  width: 100%;
  position: relative;
`

export const SInput = styled.input<{
  $isSearch: boolean | undefined
  $isError: boolean
  $theme: ThemeProps
}>`
  ${({ $isSearch, $isError, $theme: { colors } }) => css`
    width: 100%;
    background-color: transparent;
    border: 2px solid ${colors.primary.dark};
    border-radius: 20px;
    color: ${colors.primary.dark};
    padding: 10px 15px;
    outline: none;

    &::placeholder {
      color: ${colors.secondary.dark};
    }

    ${$isSearch &&
    css`
      padding-left: 40px;
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

export const SearchIconImg = styled.img`
  position: absolute;
  top: 50%;
  left: 15px;
  transform: translateY(-50%);
`

export const PasswordButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  outline: none;
`
