import { CSSProperties, FC, SVGProps } from 'react'
import { SIcon } from './svgIconStyles.tsx'
import { useTheme } from '@contexts'

export interface SvgIconProps {
  /**
   * Icon source
   */
  $icon: FC<SVGProps<SVGElement>> | string
  /**
   * Represents icon color, has higher priority than CSS "background" property
   */
  $color?: string
  /**
   * Ability to specify additional styles through the object
   */
  $css?: CSSProperties
}

export const SvgIcon: FC<SvgIconProps> = ({ $icon, $color, $css = {} }) => {
  const theme = useTheme()

  return <SIcon $icon={$icon} $color={$color} $theme={theme} $css={$css} />
}
