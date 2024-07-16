import styled, { css } from 'styled-components'
import { ButtonProps } from './Button.tsx'
import { ThemeProps } from '@types'

interface SButtonProps extends ButtonProps {
  $theme: ThemeProps
}

export const SButton = styled.button<SButtonProps>`
  ${({ $variant, $size, $theme: { colors }, $isFullWidth }) => css`
    min-width: 100px;
    background-color: transparent;
    border: 2px solid transparent;
    border-radius: 20px;
    cursor: pointer;
    font-weight: bold;

    &:active {
      opacity: 0.4;
    }
    &:disabled {
      cursor: default;
      opacity: 0.4;
    }

    //Variant styles
    ${$variant === 'primary' &&
    css`
      background-color: ${colors.primary.dark};
      color: ${colors.primary.light};
    `};
    ${$variant === 'secondary' &&
    css`
      background-color: transparent;
      border-color: ${colors.primary.dark};
      color: ${colors.primary.dark};
    `};

    //Size styles
    ${$size === 'small' &&
    css`
      font-size: 12px;
      padding: 5px 8px;
    `};
    ${$size === 'medium' &&
    css`
      font-size: 14px;
      padding: 9px 15px;
    `};
    ${$size === 'large' &&
    css`
      border-radius: 30px;
      font-size: 18px;
      padding: 13px 25px;
    `};
    ${$isFullWidth && css`
      width: 100%;
    `};
  `};
`
