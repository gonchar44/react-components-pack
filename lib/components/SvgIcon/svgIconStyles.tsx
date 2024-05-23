import styled, { css } from 'styled-components'
import { CSSProperties } from 'react'
import { ThemeProps } from '@types'

export const SIcon = styled.div<{
  $icon: any
  $color?: string
  $css?: CSSProperties | undefined
  $theme: ThemeProps
}>`
  ${({ $color, $css, $icon, $theme: { colors } }) => css`
    width: ${$css?.width || 20}px;
    height: ${$css?.height || 20}px;
    background: ${$color || $css?.background || colors.primary.dark};
    mask-image: url(${$icon});
    -webkit-mask-image: url(${$icon});
    mask-size: contain;
    -webkit-mask-size: contain;
    mask-repeat: no-repeat;
    -webkit-mask-repeat: no-repeat;
    mask-position: center;
    -webkit-mask-position: center;
    ${$css
      ? Object.entries($css)
          .map(([key, value]) => `${key}: ${value};`)
          .join(' ')
      : ''};
  `};
`
