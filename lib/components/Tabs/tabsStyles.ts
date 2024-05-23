import styled, { css } from 'styled-components'
import { ThemeProps } from '@types'

export const SWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
  padding: 5px;
`

export const STabs = styled.ul`
  width: 100%;
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`

export const STab = styled.li<{ $isActive: boolean; $theme: ThemeProps }>`
  ${({ $isActive, $theme: { colors } }) => css`
    cursor: pointer;
    padding: 12px 15px;
    position: relative;

    &::before {
      content: '';
      width: 100%;
      height: 100%;
      background-color: ${colors.primary.dark};
      border-radius: 30px;
      position: absolute;
      top: 0;
      left: 0;
      transition: transform 0.2s ease-in-out;
      transform: scale(0);
      z-index: -1;
    }

    ${$isActive &&
    css`
      color: ${colors.primary.light};
      font-weight: bold;
      &::before {
        transform: scale(1);
      }
    `};
  `};
`

export const SContent = styled.div<{ $theme: ThemeProps }>`
  ${({ $theme: { colors } }) => css`
    min-height: 100px;
    border: 1px solid ${colors.secondary.dark};
    border-radius: 20px;
    padding: 15px 10px;
  `};
`
