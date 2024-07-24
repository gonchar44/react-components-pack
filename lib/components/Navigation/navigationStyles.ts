import styled, { css } from 'styled-components'
import { NavLink } from 'react-router-dom'
import { ThemeProps } from '@types'

export const SNavigation = styled.nav<{ $theme: ThemeProps }>`
  ${({ $theme: { colors } }) => css`
    width: max-content;
    background-color: ${colors.secondary.dark};
    border-radius: 20px;
    display: flex;
    column-gap: 5px;
    padding: 5px;
  `};
`

export const SLink = styled(NavLink)<{ $theme: ThemeProps }>`
  ${({ $theme: { colors } }) => css`
    border-radius: 20px;
    color: ${colors.primary.light};
    font-size: 16px;
    text-decoration: none;
    padding: 5px 15px;
    position: relative;
    transition: all 0.3s ease-in-out;
    z-index: 1;

    &::before {
      content: '';
      width: 100%;
      height: 100%;
      background-color: ${colors.secondary.dark};
      border-radius: 20px;
      position: absolute;
      top: 0;
      left: 0;
      transition: transform 0.3s ease-in-out;
      transform: scale(0);
      z-index: -1;
    }

    &.active::before {
      transform: scale(1);
    }
  `};
`

export const SNotificationAmount = styled.span<{ $theme: ThemeProps }>`
  ${({ $theme: { colors } }) => css`
    min-width: 22px;
    height: 22px;
    background-color: ${colors.secondary.error};
    border-radius: 50%;
    font-size: 12px;
    padding: 0 5px;
    position: absolute;
    top: -10px;
    right: -5px;
    text-align: center;
    line-height: 22px;
  `};
`

export const SNotification = styled.div<{ $theme: ThemeProps }>`
  ${({ $theme: { colors } }) => css`
    width: 8px;
    height: 8px;
    background-color: ${colors.secondary.error};
    position: absolute;
    top: 0;
    right: 0;
    border-radius: 50%;
  `};
`
